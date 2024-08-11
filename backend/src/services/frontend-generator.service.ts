import fs from "fs";
import { exec } from 'child_process';
import path from "path";
import util from 'util';

interface Template {
  id: string;
  type: string;
  props: any;
}

interface WorkflowSequence {
  name: string;
  steps: string[];
}

interface AiOutput {
  selectedTemplates: Template[];
  layout: string;
  workflowSequences: WorkflowSequence[];
}

export class FrontendGenerator {
  private execAsync = util.promisify(exec);

  async generateFrontend(
    aiOutput: AiOutput,
    contractAddress: string,
    contractABI: any,
    title: string,
    description: string,
    theme: string,
    logo: string,
  ): Promise<{ success: boolean; message: string }> {
    //Replace space with the - and make title lower case
    const projectName = title.toLowerCase().replace(/\s+/g, '-');
    const generateDir = path.join(__dirname, "..", "..", "generate");

    try {
      await this.createProjectDirectory(generateDir, projectName);
      const projectPath = path.join(generateDir, projectName);

      await this.createNextJsApp(projectPath);
      await this.createEnvFile(projectPath, contractAddress);
      await this.installDependencies(projectPath);
      await this.copyTemplateFiles(aiOutput.selectedTemplates, projectPath, title, description, logo);
      await this.generateAppComponent(aiOutput, contractAddress, contractABI, projectPath, theme);
      await this.configureNextConfig(projectPath, contractAddress);

      console.log("Frontend generation complete!");
      return { success: true, message: "Frontend generation complete" };
    } catch (error) {
      console.error("Error during frontend generation:", error);
      throw new Error(`Error during frontend generation: ${(error as Error).message}`);
    }
  }

  private async createProjectDirectory(generateDir: string, projectName: string): Promise<void> {
    if (!fs.existsSync(generateDir)) {
      fs.mkdirSync(generateDir, { recursive: true });
    }

    const projectPath = path.join(generateDir, projectName);

    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true });
    }
  }

  private async createEnvFile(projectPath: string, contractAddress: string): Promise<void> {
    const envContent = `NEXT_PUBLIC_CONTRACT_ADDRESS=${contractAddress}\nNEXT_PUBLIC_API_URL=https://quickdapp-api.theoptima.xyz/api/`;
    const envFilePath = path.join(projectPath, ".env");
    fs.writeFileSync(envFilePath, envContent, "utf8");
    console.log(".env file created successfully.");
  }

  private async createNextJsApp(projectPath: string): Promise<void> {
    console.log("Creating a new Next.js app...");
    try {
      await this.execAsync(
        `npx create-next-app@latest ${projectPath} --ts --tailwind --eslint --src-dir --app --import-alias '@/*'`
      );
      console.log("Next.js app created successfully.");
    } catch (error) {
      throw new Error(`Error creating Next.js project: ${(error as Error).message}`);
    }
  }

  private async installDependencies(projectPath: string): Promise<void> {
    console.log("Installing additional dependencies...");
    try {
      process.chdir(projectPath);
      await this.execAsync(
        "npm install @web3-react/core@^6.0.0 @web3-react/injected-connector @thirdweb-dev/react ethereum-blockies zustand @thirdweb-dev/sdk @heroicons/react @types/ethereum-blockies --legacy-peer-deps"
      );
      console.log("Dependencies installed successfully.");
    } catch (error) {
      throw new Error(`Error installing dependencies: ${(error as Error).message}`);
    }
  }

  private copyTemplateFiles(templates: any, projectPath: string, title: string, description: string, logo: string) {
    const templateDir = path.join(__dirname, "..", "..", "templates");

    const directoriesToCreate = [
      "src/components/common",
      "src/components/erc20",
      "src/components/connection",
      "src/styles",
      "src/utils",
      "src/components/display",
      "src/hooks",
      "src/types",
    ];

    directoriesToCreate.forEach((dir) => {
      fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
    });

    templates.forEach((template: Template) => {
      const sourceFile = path.join(
        templateDir,
        template.type,
        `${template.id.charAt(0).toUpperCase() + template.id.slice(1)}Template.tsx`
      );
      const destFile = path.join(
        projectPath,
        "src",
        "components",
        template.type,
        `${template.id.charAt(0).toUpperCase() + template.id.slice(1)}Template.tsx`
      );
      fs.copyFileSync(sourceFile, destFile);
    });

    // Copy individual files
    const filesToCopy = [
      { src: "common/SwapTemplate.tsx", dest: "src/components/common/SwapTemplate.tsx" },
      { src: "common/StakeTemplate.tsx", dest: "src/components/common/StakeTemplate.tsx" },
      { src: "common/MintTemplate.tsx", dest: "src/components/common/MintTemplate.tsx" },
      { src: "styles/public.css", dest: "src/styles/public.css" },
      { src: "utils/colors.tsx", dest: "src/utils/colors.tsx" },
      { src: "utils/functions.tsx", dest: "src/utils/functions.tsx" },
      { src: "utils/logo.svg", dest: "public/logo.svg" },
      { src: "utils/favicon.ico", dest: "public/favicon.ico" },
      { src: "hooks/api.tsx", dest: "src/hooks/api.tsx" },
      { src: "hooks/useGlobalRequestStore.tsx", dest: "src/hooks/useGlobalRequestStore.tsx" },
      { src: "hooks/useRequest.tsx", dest: "src/hooks/useRequest.tsx" },
      { src: "types/request.tsx", dest: "src/types/request.tsx" }
    ];

    filesToCopy.forEach(({ src, dest }) => {
      fs.copyFileSync(path.join(templateDir, src), path.join(projectPath, dest));
    });

    // Copy display templates
    const displaySourceDir = path.join(templateDir, "display");
    const displayDestDir = path.join(projectPath, "src", "components", "display");
    this.copyDirectoryRecursive(displaySourceDir, displayDestDir);

    // Update Layout.tsx with the logo URL
    if (logo) {
      const layoutFilePath = path.join(projectPath, "src", "components", "display", "Layout.tsx");
      let layoutFileContent = fs.readFileSync(layoutFilePath, 'utf8');
      layoutFileContent = layoutFileContent.replace(/src={Logo}/g, `src="${logo}"`);
      fs.writeFileSync(layoutFilePath, layoutFileContent, 'utf8');
    }

    // Modify Head.tsx
    this.modifySEOHead(projectPath, title, description);
  }

  private modifySEOHead(projectPath: string, title: string, description: string) {
    const seoHeadPath = path.join(projectPath, "src", "components", "display", "Head.tsx");
    let content = fs.readFileSync(seoHeadPath, "utf8");

    content = content.replace(/QuickDapp/g, title);
    content = content.replace(/Generate your web3 website/g, description);

    fs.writeFileSync(seoHeadPath, content, "utf8");
  }

  private copyDirectoryRecursive(source: string, destination: string) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    fs.readdirSync(source, { withFileTypes: true }).forEach((entry) => {
      const sourcePath = path.join(source, entry.name);
      const destPath = path.join(destination, entry.name);

      if (entry.isDirectory()) {
        this.copyDirectoryRecursive(sourcePath, destPath);
      } else {
        fs.copyFileSync(sourcePath, destPath);
      }
    });
  }

  private replaceDefaultColor = (configContent: string, newColor: string) => {
    return configContent.replace(/DEFAULT: ?['"]#([A-Fa-f0-9]{6})['"]/g, `DEFAULT: '${newColor}'`);
  };

  private async configureNextConfig(projectPath: string, contractAddress: string): Promise<void> {
    const nextConfigPath = path.join(projectPath, "next.config.mjs");

    const nextConfigContent = `
      /** @type {import('next').NextConfig} */
      const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
        },
        publicRuntimeConfig: {
          contractAddress: "${contractAddress}",
        },
      };
      
      export default nextConfig;
    `;

    fs.writeFileSync(nextConfigPath, nextConfigContent);
  };

  private generateAppComponent(aiOutput: any, contractAddress: string, contractABI: any, projectPath: string, theme: string) {
    const importTemplates = aiOutput.selectedTemplates
      .map(
        (t: any) =>
          `import ${t.id.charAt(0).toUpperCase() + t.id.slice(1)
          }Template from '../components/${t.type}/${t.id.charAt(0).toUpperCase() + t.id.slice(1)
          }Template';`
      )
      .join("\n");

    const componentTemplates = aiOutput.selectedTemplates
      .filter((t: any) => t.id !== "connectWallet")
      .map((t: any) => {
        if (t.id === "tokenTransfer") {
          return `
          <div className="col-span-1">
          <TokenTransferTemplate
        onTransfer={async (recipient, amount) => {
          const contract = getContract();
          if (contract) {
            await contract.transfer(recipient, ethers.parseEther(amount));
          }
        }}
        suggestedAmounts={${JSON.stringify(t.props.suggestedAmounts)}}
      /></div>`;
        } else if (t.id === "balanceDisplay") {
          return `<div className="col-span-1"><BalanceDisplayTemplate
          getBalance={async () => {
            return "0";
          }}
        symbol="${t.props.symbol}"
      /></div>`;
        } else if (t.id === "eventList") {
          return `<div className="col-span-1 md:col-span-2"><EventListTemplate
          getEvents={async () => {
            if (contract) {
              const events = await contract.events.getAllEvents({
                eventName: "Transfer",
              });
              return events.map((event) => ({
                from: event.data.from,
                to: event.data.to,
                value: event.data.value?.toString(),
              }));
            }
            return [];
          }}
        eventName="${t.props.eventName}"
      /></div>`;
        }
      })
      .join("\n          ");

    // Read index.js template and replace placeholders
    const indexTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "templates", "pages", "index.tsx"),
      "utf8"
    );
    const indexContent = indexTemplate
      .replace("${importTemplates}", importTemplates)
      .replace("${contractABI}", JSON.stringify(contractABI))
      .replace("${contractAddress}", contractAddress)
      .replace("${componentTemplates}", componentTemplates);

    // Ensure the 'src/pages' directory exists
    fs.mkdirSync(path.join(projectPath, "src", "pages"), { recursive: true });

    fs.writeFileSync(path.join(projectPath, "src", "pages", "index.tsx"), indexContent);

    // Read _app.js template and write it directly
    const appTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "templates", "pages", "_app.tsx"),
      "utf8"
    );
    fs.writeFileSync(path.join(projectPath, "src", "pages", "_app.tsx"), appTemplate);

    const sourceSwapFilePath = path.join(__dirname, "..", "..", "templates", "pages", "swap.tsx");
    const targetSwapFilePath = path.join(projectPath, "src", "pages", "swap.tsx");
    const targetSwapDir = path.dirname(targetSwapFilePath);
    if (!fs.existsSync(targetSwapDir)) {
      fs.mkdirSync(targetSwapDir, { recursive: true });
    }
    fs.copyFileSync(sourceSwapFilePath, targetSwapFilePath);

    const sourceTransferFilePath = path.join(__dirname, "..", "..", "templates", "pages", "transfer.tsx");
    const targetTransferFilePath = path.join(projectPath, "src", "pages", "transfer.tsx");
    const targetTransferDir = path.dirname(targetTransferFilePath);
    if (!fs.existsSync(targetTransferDir)) {
      fs.mkdirSync(targetTransferDir, { recursive: true });
    }
    fs.copyFileSync(sourceTransferFilePath, targetTransferFilePath);

    // Update tailwind.config.js
    const sourceTailwindConfigPath = path.join(__dirname, "..", "..", "templates", "utils", "tailwind.config.ts");
    const targetTailwindConfigPath = path.join(projectPath, 'tailwind.config.ts');
    let customTailwindConfig = fs.readFileSync(sourceTailwindConfigPath, 'utf8');
    customTailwindConfig = this.replaceDefaultColor(customTailwindConfig, theme);
    fs.writeFileSync(targetTailwindConfigPath, customTailwindConfig);

    const srcAppPath = path.join("src", "app");
    if (fs.existsSync(srcAppPath)) {
      console.log("Removing src/app directory...");
      fs.rmSync(srcAppPath, { recursive: true, force: true });
      console.log("src/app directory removed successfully.");
    }
  }

  // Use after completed ai generation
  private generatePageComponent = (
    pageName: string,
    templateName: string,
    requestNeeded: boolean = false,
    templateType: string,
  ) => {
    const requestCode = requestNeeded
      ? `
      const { trigger } = useRequest("toptokens", "GET", "contract/top-tokens", {}, false);

      useEffect(() => {
        trigger();
      }, []);
      `
      : "";

    return `
    import React, { useEffect } from "react";
    import ${templateName} from "@/components/${templateType}/${templateName}";
    import useRequest from "@/hooks/useRequest";

    const ${pageName}: React.FC = () => {
      ${requestCode}
      return (
        <div className="flex items-center justify-center md:pt-20">
          <${templateName} />
        </div>
      );
    };

    export default ${pageName};
    `;
  };
}
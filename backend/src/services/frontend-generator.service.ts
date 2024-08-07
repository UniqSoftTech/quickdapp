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
    const sanitizedTitle = title.toLowerCase().replace(/\s+/g, '-');
    const projectName = sanitizedTitle;
    const generateDir = path.join(__dirname, "..", "..", "generate");

    try {
      await this.createProjectDirectory(generateDir, projectName);
      const projectPath = path.join(generateDir, projectName);

      await this.createNextJsApp(projectPath);
      await this.installDependencies(projectPath);
      await this.copyTemplateFiles(aiOutput.selectedTemplates, projectPath, title, description);
      await this.generateAppComponent(aiOutput, contractAddress, contractABI, projectPath, theme);

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

  private async createNextJsApp(projectPath: string): Promise<void> {
    console.log("Creating a new Next.js app...");
    try {
      await this.execAsync(
        `npx create-next-app@latest ${projectPath} --js --tailwind --eslint --src-dir --app --import-alias '@/*'`
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
        "npm install @web3-react/core@^6.0.0 @web3-react/injected-connector @thirdweb-dev/react ethereum-blockies @thirdweb-dev/sdk @heroicons/react --legacy-peer-deps"
      );
      console.log("Dependencies installed successfully.");
    } catch (error) {
      throw new Error(`Error installing dependencies: ${(error as Error).message}`);
    }
  }

  private copyTemplateFiles(templates: any, projectPath: string, title: string, description: string) {
    const templateDir = path.join(__dirname, "..", "..", "templates");

    const directoriesToCreate = [
      "src/components/common",
      "src/components/erc20",
      "src/components/connection",
      "src/styles",
      "src/utils",
      "src/components/display"
    ];

    directoriesToCreate.forEach((dir) => {
      fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
    });

    templates.forEach((template: Template) => {
      const sourceFile = path.join(
        templateDir,
        template.type,
        `${template.id.charAt(0).toUpperCase() + template.id.slice(1)}Template.jsx`
      );
      const destFile = path.join(
        projectPath,
        "src",
        "components",
        template.type,
        `${template.id.charAt(0).toUpperCase() + template.id.slice(1)}Template.jsx`
      );
      fs.copyFileSync(sourceFile, destFile);
    });

    // Copy individual files
    const filesToCopy = [
      { src: "common/SwapTemplate.jsx", dest: "src/components/common/SwapTemplate.jsx" },
      { src: "common/StakeTemplate.jsx", dest: "src/components/common/StakeTemplate.jsx" },
      { src: "styles/public.css", dest: "src/styles/public.css" },
      { src: "utils/colors.js", dest: "src/utils/colors.js" },
      { src: "utils/functions.js", dest: "src/utils/functions.js" },
      { src: "utils/logo.svg", dest: "public/logo.svg" },
    ];

    filesToCopy.forEach(({ src, dest }) => {
      fs.copyFileSync(path.join(templateDir, src), path.join(projectPath, dest));
    });

    // Copy display templates
    const displaySourceDir = path.join(templateDir, "display");
    const displayDestDir = path.join(projectPath, "src", "components", "display");
    this.copyDirectoryRecursive(displaySourceDir, displayDestDir);

    // Modify Head.jsx
    this.modifySEOHead(projectPath, title, description);
  }

  private modifySEOHead(projectPath: string, title: string, description: string) {
    const seoHeadPath = path.join(projectPath, "src", "components", "display", "Head.jsx");
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
      path.join(__dirname, "..", "..", "templates", "pages", "index.js"),
      "utf8"
    );
    const indexContent = indexTemplate
      .replace("${importTemplates}", importTemplates)
      .replace("${contractABI}", JSON.stringify(contractABI))
      .replace("${contractAddress}", contractAddress)
      .replace("${componentTemplates}", componentTemplates);

    // Ensure the 'src/pages' directory exists
    fs.mkdirSync(path.join(projectPath, "src", "pages"), { recursive: true });

    fs.writeFileSync(path.join(projectPath, "src", "pages", "index.js"), indexContent);

    // Read _app.js template and write it directly
    const appTemplate = fs.readFileSync(
      path.join(__dirname, "..", "..", "templates", "pages", "_app.js"),
      "utf8"
    );
    fs.writeFileSync(path.join(projectPath, "src", "pages", "_app.js"), appTemplate);

    const sourceSwapFilePath = path.join(__dirname, "..", "..", "templates", "pages", "swap.js");
    const targetSwapFilePath = path.join(projectPath, "src", "pages", "swap.js");
    const targetSwapDir = path.dirname(targetSwapFilePath);
    if (!fs.existsSync(targetSwapDir)) {
      fs.mkdirSync(targetSwapDir, { recursive: true });
    }
    fs.copyFileSync(sourceSwapFilePath, targetSwapFilePath);

    const sourceTransferFilePath = path.join(__dirname, "..", "..", "templates", "pages", "transfer.js");
    const targetTransferFilePath = path.join(projectPath, "src", "pages", "transfer.js");
    const targetTransferDir = path.dirname(targetTransferFilePath);
    if (!fs.existsSync(targetTransferDir)) {
      fs.mkdirSync(targetTransferDir, { recursive: true });
    }
    fs.copyFileSync(sourceTransferFilePath, targetTransferFilePath);

    // Update tailwind.config.js
    const sourceTailwindConfigPath = path.join(__dirname, "..", "..", "templates", "utils", "tailwind.config.js");
    const targetTailwindConfigPath = path.join(projectPath, 'tailwind.config.js');
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
}
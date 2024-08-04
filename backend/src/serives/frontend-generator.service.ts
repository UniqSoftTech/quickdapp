import fs from "fs";
import { execSync } from "child_process";
import path from "path";

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
  async generateFrontend(
    aiOutput: AiOutput,
    contractAddress: string,
    contractABI: any
  ): Promise<{ success: boolean; message: string }> {
    const projectName = "ai-generated-dapp-next";
    const generateDir = path.join(__dirname, "..", "..", "generate"); // Adjust path to place generate folder in project root

    if (!fs.existsSync(generateDir)) {
      fs.mkdirSync(generateDir, { recursive: true });
    }

    const projectPath = path.join(generateDir, projectName);

    console.log("Creating a new Next.js app...");
    try {
      execSync(
        `npx create-next-app@latest ${projectPath} --js --tailwind --eslint --src-dir --app --import-alias '@/*'`,
        { stdio: "inherit" }
      );

      console.log("Next.js app created successfully.");
    } catch (error) {
      console.error("Error creating Next.js project:", error);
      return { success: false, message: "Error creating Next.js project" };
    }

    // Check if the project directory was created successfully
    if (!fs.existsSync(projectPath)) {
      console.error(`Project directory '${projectPath}' does not exist.`);
      return { success: false, message: `Project directory '${projectPath}' does not exist` };
    }

    // Change to the project directory
    try {
      process.chdir(projectPath);
      console.log(`Changed to project directory: ${projectPath}`);
    } catch (error) {
      console.error(`Error changing to project directory '${projectPath}':`, error);
      return { success: false, message: `Error changing to project directory '${projectPath}'` };
    }

    // Install additional dependencies
    console.log("Installing additional dependencies...");
    try {
      execSync(
        "npm install @web3-react/core@^6.0.0 @web3-react/injected-connector @thirdweb-dev/react ethereum-blockies @thirdweb-dev/sdk @heroicons/react --legacy-peer-deps",
        { stdio: "inherit" }
      );
      console.log("Dependencies installed successfully.");
    } catch (error) {
      console.error("Error installing dependencies:", error);
      return { success: false, message: "Error installing dependencies" };
    }

    console.log("Copying template files...");
    try {
      copyTemplateFiles(aiOutput.selectedTemplates, projectPath);

      console.log("Template files copied successfully.");
    } catch (error) {
      console.error("Error copying template files:", error);
      process.exit(1);
    }

    // Generate main App component
    console.log("Generating main App component...");
    try {
      generateAppComponent(aiOutput, contractAddress, contractABI, projectPath);
      console.log("Main App component generated successfully.");
    } catch (error) {
      console.error("Error generating main App component:", error);
      process.exit(1);
    }

    // Further steps to generate the frontend (if needed)
    console.log("Frontend generation complete!");
    return { success: true, message: "Frontend generation complete" };
  }
}

function copyTemplateFiles(templates: any, projectPath: string) {
  const templateDir = path.join(__dirname, "..", "..", "templates");
  fs.mkdirSync(path.join(projectPath, "src", "components", "common"), { recursive: true });
  fs.mkdirSync(path.join(projectPath, "src", "components", "erc20"), { recursive: true });
  fs.mkdirSync(path.join(projectPath, "src", "components", "connection"), {
    recursive: true,
  });
  fs.mkdirSync(path.join(projectPath, "src", "styles"), { recursive: true });
  fs.mkdirSync(path.join(projectPath, "src", "components", "layout"), { recursive: true });

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

  // Copy ThemeToggle.jsx
  fs.copyFileSync(
    path.join(templateDir, "common", "ThemeToggle.jsx"),
    path.join(projectPath, "src", "components", "common", "ThemeToggle.jsx")
  );

  fs.copyFileSync(
    path.join(templateDir, "styles", "public.css"),
    path.join(projectPath, "src", "styles", "public.css")
  );

  fs.copyFileSync(
    path.join(templateDir, "layout", "Layout.jsx"),
    path.join(projectPath, "src", "components", "layout", "Layout.jsx")
  );
}

function generateAppComponent(aiOutput: any, contractAddress: string, contractABI: any, projectPath: string) {
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
        const contract = getContract();
        if (contract) {
          const balance = await contract.balanceOf(account);
          return ethers.formatEther(balance);
        }
        return '0';
      }}
      symbol="${t.props.symbol}"
    /></div>`;
      } else if (t.id === "eventList") {
        return `<div className="col-span-1 md:col-span-2"><EventListTemplate
      getEvents={async () => {
        const contract = getContract();
        if (contract) {
          const filter = contract.filters.Transfer();
          const events = await contract.queryFilter(filter, -1000);
          return events.map(event => ({
            from: event.args.from,
            to: event.args.to,
            value: ethers.formatEther(event.args.value)
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

  // Update tailwind.config.js
  const tailwindConfigPath = path.join(projectPath, "tailwind.config.js");
  const tailwindConfig = fs.readFileSync(tailwindConfigPath, "utf8");
  const updatedTailwindConfig = tailwindConfig.replace(
    /module.exports = \{/,
    "module.exports = {\n  darkMode: 'class',"
  );
  fs.writeFileSync(tailwindConfigPath, updatedTailwindConfig);
}
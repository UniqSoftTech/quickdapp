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

    // Further steps to generate the frontend (if needed)
    console.log("Frontend generation complete!");
    return { success: true, message: "Frontend generation complete" };
  }
}

const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

function generateFrontend(aiOutput, contractAddress, contractABI) {
  const projectName = "ai-generated-dapp-next";

  console.log("Creating a new Next.js app...");
  try {
    execSync(
      `npx create-next-app@latest ${projectName} --js --tailwind --eslint --src-dir --app --import-alias '@/*'`,
      { stdio: "inherit" },
    );

    console.log("Next.js app created successfully.");
  } catch (error) {
    console.error("Error creating Next.js project:", error);
    process.exit(1);
  }

  // Check if the project directory was created successfully
  if (!fs.existsSync(projectName)) {
    console.error(`Project directory '${projectName}' does not exist.`);
    process.exit(1);
  }

  // Change to the project directory
  try {
    process.chdir(projectName);
    console.log(`Changed to project directory: ${projectName}`);
  } catch (error) {
    console.error(
      `Error changing to project directory '${projectName}':`,
      error,
    );
    process.exit(1);
  }

  // Install additional dependencies
  console.log("Installing additional dependencies...");
  try {
    execSync(
      "npm install @web3-react/core@^6.0.0 @web3-react/injected-connector @thirdweb-dev/react ethereum-blockies @thirdweb-dev/sdk @heroicons/react --legacy-peer-deps",
      { stdio: "inherit" },
    );
    console.log("Dependencies installed successfully.");
  } catch (error) {
    console.error("Error installing dependencies:", error);
    process.exit(1);
  }

  console.log("Frontend generation complete!");
}

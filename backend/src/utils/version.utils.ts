import fs from "fs"
import path from "path"


export function getVersion() {
  try{
    const packageJsonPath = path.join(__dirname, "..", "..", "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  return {
    version: packageJson.version,
    updatedAt: packageJson.updated_at,
    currentDate: new Date().toISOString(),
  };
  }
  catch(e) {
    return {
      version: "1.0.0",
      updatedAt: new Date().toISOString(),
      currentDate: new Date().toISOString(),
    };
  }
}


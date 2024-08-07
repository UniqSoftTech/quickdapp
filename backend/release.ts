const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

let [major, minor, patch] = packageJson.version.split(".").map(Number);

let newPatch = patch + 1;

if (newPatch === 100) {
  newPatch = 0;
  minor = minor + 1;

  if (minor === 100) {
    minor = 0;
    major = major + 1;
  }
}
const newVersion = `${major}.${minor}.${newPatch}`;

packageJson.version = newVersion;
packageJson.updated_at = new Date().toISOString();

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n", "utf8");
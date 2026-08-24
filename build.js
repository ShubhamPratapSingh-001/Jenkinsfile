const fs = require("fs");

const requiredFiles = ["app.js", "server.js"];

for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        throw new Error(`${file} is missing`);
    }
}

console.log("Build verification completed successfully.");

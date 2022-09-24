const fs = require("fs");
const path = require("path");
list = [];
ignoreDir = [
  ".idea", ".vscode", ".git",
  "node_modules", "dist"
];

function listFile(dir) {
  let files = fs.readdirSync(dir).map(f => path.join(dir, f));
  files
    .filter(f => fs.lstatSync(f).isDirectory())
    .filter(d => !ignoreDir.includes(d))
    .forEach(d => listFile(d));

  files
    .filter(f => fs.lstatSync(f).isFile())
    .filter(f => f.endsWith(".ts"))
    .forEach((f) => {
      let basename = path.basename(f);
      let filename = basename.substring(0, basename.length - ".ts".length);

      [".js.map", ".js"].forEach(suffix => {
        let generatedFile = path.join(dir, filename + suffix);
        if (fs.existsSync(generatedFile)) {
          fs.unlinkSync(generatedFile);
          console.log(`del ${generatedFile}`);
        }
      });
    });
  // return list;
}

listFile("./");

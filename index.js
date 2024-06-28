const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
// fs.mkdirSync("./build");

fs.writeFileSync(path.join(__dirname, "build", "cat.txt"), "Hello world");
fs.createReadStream(path.join(__dirname, "build", "cat.txt")).pipe(
  zlib.createGunzip().pipe(fs.createWriteStream("./cat.zip"))
);

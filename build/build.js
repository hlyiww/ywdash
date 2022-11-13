import fs from "fs";
import path from "path";

const autoIncreamentVersionByDefault = (version, limit = 10) => {
  const versionList = version.split(".").map(Number);
  let target_first = versionList[0];
  let target_second = versionList[1];
  let target_third = versionList[2];
  if (target_third + 1 > limit) {
    target_third = 0;
    if (target_second + 1 > limit) {
      target_second = 0;
      target_first += 1;
    } else {
      target_second += 1;
    }
  } else {
    target_third += 1;
  }
  return [target_first, target_second, target_third].join(".");
};

const createPackageJson = (version) => `{
    "name": "pandash",
    "version": "${version}",
    "main": "index.cjs",
    "module": "index.js",
    "author": "yiwwhl",
    "github": "https://github.com/yiwwhl/pandash",
    "description": "yiwwhl pandash",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/yiwwhl/pandash.git"
    },
    "keywords": ["工具"],
    "license": "",
    "bugs": {
      "url": "https://github.com/yiwwhl/pandash/issues"
    }
  }`;

const main = () => {
  let version = fs.readFileSync("./build/version", { encoding: "utf8" });
  version = autoIncreamentVersionByDefault(version);
  fs.writeFileSync("./build/version", version);
  fs.writeFileSync("./dist/package.json", createPackageJson(version));
};

main();

import fs from "fs";

const createPackageJson = () => `{
    "name": "ywdash",
    "version": "${process.env.RELEASE_VERSION}",
    "main": "index.cjs",
    "module": "index.js",
    "author": "yiwwhl",
    "github": "https://github.com/hlyiww/ywdash",
    "description": "yiwwhl pandash",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/hlyiww/ywdash.git"
    },
    "keywords": ["工具"],
    "license": "",
    "bugs": {
      "url": "https://github.com/hlyiww/ywdash/issues"
    },
    "publishConfig": {
      "registry": "https://registry.npmjs.org/",
      "access": "public"
    }
  }`;

const main = () => {
  fs.writeFileSync("./dist/package.json", createPackageJson(), {
    encoding: "utf-8",
  });
};

main();

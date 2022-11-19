import fs from "fs";

const createPackageJson = () => `{
    "name": "ywdash",
    "version": "${process.env.RELEASE_VERSION}",
    "main": "index.cjs",
    "module": "index.js",
    "author": "yiwwhl",
    "github": "https://github.com/hlyiww/ywdash",
    "description": "yiwwhl ywdash",
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

const createReadme = () => `
# Ywdash
Self-built lightweight lodash solutions

## Install

pnpm add ywdash
`;

const main = () => {
  fs.writeFileSync("./dist/package.json", createPackageJson(), {
    encoding: "utf-8",
  });
  fs.writeFileSync("./dist/README.md", createReadme(), {
    encoding: "utf-8",
  });
};

main();

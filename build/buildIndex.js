import fs from "fs";

const createPackagesIndex = (valid_dirs) => `
import "./_declare/GlobalType";

${valid_dirs
  .map(
    (packName) => "import " + packName + " from " + "'@/" + packName + "/src'"
  )
  .join(";\n")}

const _ = {
  ${valid_dirs.map((packName) => packName)}
};

export default _;
`;

const autoImportPack = () => {
  const excludes = ["_declare", "index.ts"];
  const valid_dirs = fs
    .readdirSync("./packages")
    .filter((item) => !excludes.includes(item));
  fs.writeFileSync("./packages/index.ts", createPackagesIndex(valid_dirs), {
    encoding: "utf-8",
  });
};

autoImportPack();

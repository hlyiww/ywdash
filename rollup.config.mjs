import typescript from "@rollup/plugin-typescript";
export default {
  input: "packages/index.ts",
  output: [
    {
      file: "./dist/index.js",
      format: "es",
    },
    {
      file: "./dist/index.cjs",
      format: "cjs",
    },
  ],
  plugins: [
    typescript({
      outDir: "dist",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
};

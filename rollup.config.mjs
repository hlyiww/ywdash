import typescript from "@rollup/plugin-typescript";
export default {
  input: "packages/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
  },
  plugins: [
    typescript({
      outDir: "dist",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
};

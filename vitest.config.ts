import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vitest"],
      dts: true,
    }),
  ],
  test: {
    include: ["packages/**/test/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./packages"),
    },
  },
});

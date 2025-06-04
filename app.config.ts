import { defineConfig } from "@tanstack/react-start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),

      tailwindcss(),
    ],
    css: {
      transformer: "lightningcss", // Tailwind v4 uses Lightning CSS
    },
  },
});

export default config;

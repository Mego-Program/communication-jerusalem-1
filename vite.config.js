import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "AppCommunication",
      filename: "remoteEntry.js",
      exposes: {
        "./AppCommunication": "./src/AppCommunication",
      },
      shared: ["react", "react-dom"],
    }),
    
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

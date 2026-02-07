import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
      "/api": {
        target: "http://app-9a52da8e-d0b1-4cf1-bb48-9a9865b7b55c.cleverapps.io",
        changeOrigin: true,
      },
    },
  },
});

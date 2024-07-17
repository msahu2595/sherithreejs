import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // or 'localhost'
    port: 5173,
  },
  plugins: [glsl()],
});

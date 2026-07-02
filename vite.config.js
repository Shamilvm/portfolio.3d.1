import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  base: "/",
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          r3f: ["@react-three/fiber", "@react-three/drei"],
          gsap: ["gsap", "@gsap/react"],
          motion: ["framer-motion"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});

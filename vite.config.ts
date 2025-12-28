import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@/components/ui": path.resolve(__dirname, "./src/components/interview/ui"),
      "@/components/layout": path.resolve(__dirname, "./src/components/interview/layout"),
      "@/context": path.resolve(__dirname, "./context"),
      "@/lib": path.resolve(__dirname, "./lib"),
      "@/hooks": path.resolve(__dirname, "./hooks"),
      "@/types": path.resolve(__dirname, "./types"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

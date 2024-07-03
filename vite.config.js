import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // Output directory for build files
    outDir: "dist",
    rollupOptions: {
      // Input configuration specifying each HTML file to be built
      input: {
        main: "index.html",
        news: "news.html",
      },
    },
  },
});

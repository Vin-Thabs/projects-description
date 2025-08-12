// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for build
    assetsDir: 'assets', // Where static assets like images will be placed
    rollupOptions: {
      input: './index.html', // Your entry point
    },
  },
});

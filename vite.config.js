import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    sourcemap: true, // Enable sourcemaps for debugging
  },
  server: {
    port: 3000, // Port for development server
    open: true, // Open the browser automatically when server starts
  },
});

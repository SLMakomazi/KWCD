import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: true,
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  
  preview: {
    port: 3000,
    strictPort: true,
    open: true
  }
});

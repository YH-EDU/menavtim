import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE ?? '/menavtim/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/avatars/_downloads/**'],
    },
    proxy: {
      '/menavtim/api': {
        target: 'http://localhost:8090',
        rewrite: (p) => p.replace(/^\/menavtim\/api/, '/api'),
      },
      '/api': {
        target: 'http://localhost:8090',
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

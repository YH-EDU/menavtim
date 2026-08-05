import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/menavtim/',
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
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

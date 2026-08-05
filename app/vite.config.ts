import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/menavtim-baaramit/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/avatars/_downloads/**'],
    },
    proxy: {
      '/menavtim-baaramit/api': {
        target: 'http://localhost:8090',
        rewrite: (p) => p.replace(/^\/menavtim-baaramit\/api/, '/api'),
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

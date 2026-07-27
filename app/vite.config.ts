import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aramit/',
  plugins: [react()],
  server: {
    proxy: {
      '/aramit/api': {
        target: 'http://localhost:8090',
        rewrite: (p) => p.replace(/^\/aramit\/api/, '/api'),
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

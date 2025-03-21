import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',  // URL de ton API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Réécrire le chemin si nécessaire
      },
    },
  },
});

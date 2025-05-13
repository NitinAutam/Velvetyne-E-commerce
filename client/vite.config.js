import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS is using the correct configuration file
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // or whatever your backend runs on
    },
  },
})

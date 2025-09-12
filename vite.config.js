import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional, you can keep it default
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src', // optional alias
    },
  }
})

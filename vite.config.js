import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    allowedHosts: ['.trycloudflare.com', '.loca.lt', '.ngrok.io', '.ngrok-free.app', 'localhost'],
    host: true,
  },
  build: {
    target: 'es2015'
  }
})

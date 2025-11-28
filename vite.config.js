import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    allowedHosts: ['afaisalfolio.wyzeek.com'],
    port: 1007,
  },
  server: {
    host: true
  }
})

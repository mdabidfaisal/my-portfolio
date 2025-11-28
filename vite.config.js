import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Dev server
  server: {
    host: true,          // allow external access
    strictPort: false,   // allow fallback ports if needed
  },

  // Preview server (used in Docker)
  preview: {
    host: true,          // allow all hosts
    port: 1007,
    allowedHosts: ['*'], // allow * ANY HOST *
  },
})

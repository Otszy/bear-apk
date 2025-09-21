import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true
  }
})

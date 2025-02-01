import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/',
  server: {
    port: 5173,
    watch: {
      usePolling: true
    },
    hmr: {
      overlay: true
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        beta: './index_beta.html'
      }
    }
  }
})

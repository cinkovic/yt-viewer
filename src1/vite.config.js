import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable hot reloading
      fastRefresh: true,
    }),
  ],
  root: '.',
  server: {
    // Enable HMR
    hmr: true,
    // Add proper host configuration
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

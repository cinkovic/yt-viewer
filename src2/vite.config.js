import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  // base: '/',
  base: './',
  // base: '/yt-viewer/',
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
        index: './index.html',
        beta: './index_beta.html'
      },
      output: {
        dir: 'dist',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets'
  }
})

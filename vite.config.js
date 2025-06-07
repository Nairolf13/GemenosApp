import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      host: 'localhost',
      port: 5173,
      hmr: {
        port: 5173,
        host: 'localhost',
        clientPort: 5173
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  }

  if (command === 'build') {
    config.base = '/GemenosApp/'
  }

  return config
})

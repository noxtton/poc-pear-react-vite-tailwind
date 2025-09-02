import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: './src/index.jsx',
      output: {
        entryFileNames: `main/index.js`,
        chunkFileNames: `main/[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0].endsWith('.css')) {
            return 'main/index.css'
          }
          return 'main/[name][extname]'
        }
      }
    }
  }
})

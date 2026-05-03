import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Sault-Culinary/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

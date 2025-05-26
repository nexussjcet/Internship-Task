import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Internship-Task/',
  build: {
    outDir: '../docs', 
    emptyOutDir: true
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        support: resolve(import.meta.dirname, 'support/index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        terms: resolve(import.meta.dirname, 'terms/index.html'),
        health: resolve(import.meta.dirname, 'health/index.html'),
        guide: resolve(import.meta.dirname, 'guide/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})

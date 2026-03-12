import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// Use relative paths so it works on GitHub Pages under any repo name
export default defineConfig({
  base: './',
  plugins: [preact(), tailwindcss()],
})

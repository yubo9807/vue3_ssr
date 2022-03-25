import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const viteSSR = require('vite-ssr/plugin')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSSR()
  ],
  build: {
    outDir: 'deploy/dist'
  }
})

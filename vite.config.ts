import { fileURLToPath, URL } from 'url'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

process.env.VITE_BUILD_DATE = new Date().toISOString()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/momomotus/',
  plugins: [vue(), Icons({ autoInstall: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

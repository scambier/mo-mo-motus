import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

process.env.VITE_BUILD_DATE = new Date().toISOString()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/momomotus/',
  plugins: [vue(), Icons({ autoInstall: true }), VitePWA({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

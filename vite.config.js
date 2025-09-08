import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['5173-ikqt9en97ox8q5l8kojk0-a6922504.manusvm.computer']
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/aif': {
        target: 'https://api.lotusdew.in',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/aif/, '/aif'),
      },
    },
     host: "0.0.0.0",
  },
})

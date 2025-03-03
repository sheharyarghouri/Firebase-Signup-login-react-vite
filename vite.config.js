import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Firebase-Signup-login-react-vite/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Challenges-1-Blog-postEditor',
  plugins: [react()]
});

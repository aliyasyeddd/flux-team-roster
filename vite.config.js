import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    global: 'window' , // This fixes the "global is not defined" error when using Flux's Dispatcher in a Vite environment.
  }
})

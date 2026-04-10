import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  ssr: {
    noExternal: ['@mdi/react', 'react-countup', 'react-simple-typewriter'],
  },
})

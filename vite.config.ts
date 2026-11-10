import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        exhibitions: 'exhibitions.html',
        cart: 'cart.html',
        datenschutz: 'datenschutz.html',
        impressum: 'impressum.html',
        violet: "/assets/paintings/'Violet Hour.jpg'",
        resting: "/assets/paintings/'The Resting Skiff.jpg'",
        midnight: "/assets/paintings/'Midnight Tides.jpg'"
      },
    },
  },
})
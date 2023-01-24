import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: 'Urara',
        short_name: 'Urara',
        description: 'Sweet & Powerful SvelteKit Blog Template.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/any@192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/any@512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/maskable@192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'assets/maskable@512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})

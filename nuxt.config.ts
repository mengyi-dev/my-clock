// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    // Enable the PWA features
    enabled: true,
    // The name of your PWA
    name: 'Clock',
    // The short name of your PWA
    shortName: 'Clock',
    // The icon of your PWA
    icon: {
      // The path to the icon file
      path: './assets/icons/icon.png',
      // The sizes of the icon
      sizes: [16, 32, 48, 64, 128, 256]
    },
    // The manifest of your PWA
    manifest: {
      // The start_url of your PWA
      start_url: '/',
      // The background color of your PWA
      backgroundColor: '#ffffff',
      // The theme color of your PWA
      themeColor: '#000000'
    }
  }
})

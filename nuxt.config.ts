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
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
      script: [
        {
          hid: 'gtmHead',
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHDS4FC');`,
        },
      ],
    },
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

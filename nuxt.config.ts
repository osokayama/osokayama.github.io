require('dotenv').config()
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: process.env.BASE_DIR || '/'
  },

  nitro: {
    prerender: {
      ignore: ['**/20*']
    }
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  compatibilityDate: '2025-08-26',
})
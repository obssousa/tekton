// https://nuxt.com/docs/api/configuration/nuxt-config
import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", ['@storyblok/nuxt', { accessToken: process.env.NUXT_API_SECRET, use: [apiPlugin] }]],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: 'tailwind.config',
  },
  googleFonts: {
    display: "swap",
    families: {
      Outfit: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },
  server: {
    https: true,
  }
});

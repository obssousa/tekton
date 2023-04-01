// https://nuxt.com/docs/api/configuration/nuxt-config
import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", ['@storyblok/nuxt', { accessToken: process.env.NUXT_API_SECRET, use: [apiPlugin] }]],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: 'tailwind.config',
  },
  server: {
    https: true,
  }
});

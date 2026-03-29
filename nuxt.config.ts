export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  modules: ['@nuxtjs/plausible', '@nuxt/content', '@nuxtjs/tailwindcss', '@nuxthq/studio'],

  nitro: {
    preset: 'vercel-static',
  },
});

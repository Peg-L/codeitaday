export default defineNuxtConfig({
  // https://github.com/nuxt-content/docus
  extends: ['docus'],

  modules: ['@nuxtjs/plausible'],

  devtools: { enabled: true },

  app: {
    head: {
      script: [
        {
          // 在首次繪製前決定要不要跑動畫，避免內容閃一下才隱藏
          innerHTML: "if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-anim')",
          tagPosition: 'head',
        },
      ],
    },
  },

  // 供 sitemap、llms.txt、OG 圖產生絕對網址；不設會 fallback 到 Vercel 每次部署的隨機網址
  site: {
    url: 'https://codeitaday.vercel.app',
  },

  nitro: {
    preset: 'vercel-static',
  },

  compatibilityDate: '2026-08-27',
})

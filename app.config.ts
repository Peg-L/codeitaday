// https://github.com/nuxt-content/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  seo: {
    title: '阿榮 codeitaday',
    description: '英文老師轉職前端工程師',
  },
  header: {
    title: '阿榮 codeitaday',
    logo: {
      alt: '阿榮 codeitaday',
      favicon: '/favicon.ico',
    },
  },
  socials: {
    instagram: 'https://www.instagram.com/codeitaday/',
    github: 'https://github.com/Peg-L',
  },
  github: {
    url: 'https://github.com/Peg-L/codeitaday',
    branch: 'main',
    rootDir: '.',
  },
  search: {
    fts: true,
  },
  ui: {
    colors: {
      primary: 'cat',
      neutral: 'zinc',
    },
    page: {
      slots: {
        center: 'min-w-0',
      },
    },
    prose: {
      a: {
        base: '[overflow-wrap:anywhere]',
      },
    },
  },
})

// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: '阿榮 codeitaday',
    description: '英文老師轉職前端工程師',
    image: './cover.png',
    socials: {
      instagram: 'https://www.instagram.com/codeitaday/',
      github: 'https://github.com/Peg-L',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com',
      // },
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: true,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});

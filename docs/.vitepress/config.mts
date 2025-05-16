import { defineConfig } from 'vitepress'

export default defineConfig({
  title: " ",
  description: " ",
  themeConfig: {
    nav: [
      { text: 'About me', link: '/' },
      { text: 'Example Route', link: '/route/first-route' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alicedev94' }
    ],

    footer: {
      message: 'Publicado bajo la licencia MIT.',
      copyright: 'Derechos de autor © 2019-presente Evan You'
    },



    darkModeSwitchLabel: 'Dark',
    logo: {
      src: '/assets/images/rustacean-orig-noshadow.svg',
    },
  },

  head: [
    ['link', { rel: 'stylesheet', href: '/.vitepress/theme/style.css' }]
  ]
})




import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mantra",
  description: "",
  themeConfig: {
    nav: [
      { text: 'About me', link: '/' },
      { text: 'Example Route', link: '/route/first-route' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alicedev94' }
    ],

    footer: {
      message: 'Publicado bajo la licencia MIT.',
      copyright: 'Derechos de autor © 2019-presente Evan You'
    },

  },

  head: [
    ['link', { rel: 'stylesheet', href: '/.vitepress/theme/style.css' }],
    ['meta', { name: 'theme-color', content: '#7eaf90' }]
  ],
})




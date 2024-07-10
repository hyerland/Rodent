import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rodent",
  description: "Free, open-source discord bot with advanced customization.",

  head: [
    // ['link', { rel: 'icon', href: './favicon.ico' }],
    [
      'script',
      { src: "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js" }
    ],
  ],

  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides' },
    ],

    sidebar: {
        '/guides/': [
          {
            text: 'Guides 📚',
            items: [
              { text: 'Getting Started 🏆', link: '/guides/' },
            ]
          }
        ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyerland/rodent' },
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Contribute to this page'
    }
  },

  markdown: {
    lineNumbers: true
  }
})

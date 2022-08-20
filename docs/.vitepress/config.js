import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Learn Wiremod',
  lang: 'en-US',
  cleanUrls: 'with-subfolders',
  description: 'A website for learning the ins and outs of wiremod.',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    },
    lastUpdatedText: 'yeah',
    logo: 'favicon.ico',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/revosw/learnwiremod'
      }
    ]
  }
})
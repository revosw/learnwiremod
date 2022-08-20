import { DefaultTheme, defineConfig } from 'vitepress'

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
    ],
    nav: [
      {
        link: '/expression2/',
        text: 'Expression 2'
      },
      {
        link: '/gates/',
        text: 'Gates'
      },
      {
        link: '/cpu/',
        text: 'CPU'
      },
      {
        link: '/spu/',
        text: 'SPU'
      },
      {
        link: '/gpu/',
        text: 'GPU'
      },
      {
        link: '/tools/',
        text: 'Tools'
      },
    ],
    sidebar: {
      '/expression2/': sidebarExpression2(),
      '/gates/': sidebarGates(),
      '/cpu/': sidebarCpu(),
      '/spu/': sidebarSpu(),
      '/tools/': sidebarTools(),
      '/gpu/': sidebarGpu()
    }
  }
})

function sidebarExpression2() {
  return [
    {
      text: 'Intro',
      items: [
        {
          text: 'Introduction',
          link: '/expression2/'
        },
        {
          text: 'The tool',
          link: '/expression2/tool'
        },
        {
          text: 'Hello World',
          link: '/expression2/hello-world'
        },
        {
          text: 'Directives',
          link: '/expression2/directives'
        },
        {
          text: 'Rock paper scissors',
          link: '/expression2/rock-paper-scissors'
        },
      ]
    },
  ]
}
function sidebarGates() {
  return [
    {
      text: 'Intro',
      items: [
        {
          text: 'Introduction',
          link: '/gates/'
        }
      ]
    }
  ]
}
function sidebarCpu() {
  return [
    {
      items: [
        {
          text: 'Nice',
          link: '/cpu/'
        }
      ]
    },
    {
      text: 'Intro',
      items: [
        {
          text: 'Hello World',
          link: '/cpu/hello-world'
        }
      ]
    }
  ]
}
function sidebarSpu() {
  return [
    {
      text: 'Intro',
      items: [
        {
          text: 'Hello World',
          link: '/spu/hello-world'
        }
      ]
    }
  ]
}
function sidebarGpu() {
  return [
    {
      text: 'Intro',
      items: [
        {
          text: 'Hello World',
          link: '/gpu/hello-world'
        }
      ]
    }
  ]
}
function sidebarTools() {
  return [
    {
      text: 'Intro',
      items: [
        {
          text: 'Hello World',
          link: '/tools/hello-world'
        }
      ]
    }
  ]
}
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

const nav = (_lang, index) => [
  {
    text: ['Discussions', '討論', '', '讨论'][index],
    link: 'https://github.com/importantimport/urara/discussions',
  },
]

const sidebar = (lang, index) => [
  {
    text: ['Getting Started', '入門', 'はじめに', '入门'][index],
    collapsible: true,
    items: [
      {
        text: ['Intro', '介紹', '紹介', '介绍'][index],
        link: lang + 'getting-started/intro',
      },
      {
        text: ['Quick Start', '快速開始', 'クイックスタート', '快速开始'][
          index
        ],
        link: lang + 'getting-started/quick-start',
      },
      {
        text: ['Configuration', '配置', '設定', '配置'][index],
        link: lang + 'getting-started/configuration',
      },
      {
        text: ['Writing', '寫作', '文章を書く', '写作'][index],
        link: lang + 'getting-started/writing',
      },
      {
        text: ['Deploy', '部署', '配備', '部署'][index],
        link: lang + 'getting-started/deploy',
      },
    ],
  },
  {
    text: ['Advanced', '進階', '高度な', '进阶'][index],
    collapsible: true,
    items: [
      {
        text: ['Extension', '拓展', '拡張', '拓展'][index],
        link: lang + 'advanced/extension',
      },
    ],
  },
]

const themeConfig = (lang, index) => ({
  sidebar: sidebar(lang, index),
  nav: nav(lang, index),
  editLink: {
    pattern: 'https://github.com/importantimport/urara-docs/edit/main/:path',
    text: [
      'Edit on GitHub',
      '在 GitHub 上編輯',
      'GitHub でこのページを編集',
      '在 GitHub 上编辑',
    ][index],
  },
  lastUpdatedText: ['Last Updated', '最後更新于', '最終更新', '最后更新于'][
    index
  ],
})

export default withPwa(
  defineConfig({
    title: 'Urara Docs',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/favicon.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
    ],
    description: 'Sweet & Powerful SvelteKit Blog Template.',
    markdown: { lineNumbers: true },
    locales: {
      root: {
        lang: 'en-US',
        label: 'English',
        themeConfig: themeConfig('/', 0),
      },
      zh: {
        lang: 'zh-TW',
        label: '正體中文',
        themeConfig: themeConfig('/zh/', 1),
      },
      // ja: { lang: 'ja-JP', label: '日本語', themeConfig: themeConfig('/ja/', 2) }
      'zh-hans': {
        lang: 'zh-Hans',
        label: '简体中文',
        themeConfig: themeConfig('/zh-hans/', 3),
      },
    },
    themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://github.com/importantimport/urara' },
      ],
    },
    pwa: {
      manifest: {
        name: 'Urara',
        short_name: 'Urara',
        description: 'Sweet & Powerful SvelteKit Blog Template.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/any@192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/any@512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/maskable@192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'assets/maskable@512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    },
  })
)

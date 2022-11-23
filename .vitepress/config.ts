import { defineConfig } from 'vitepress'

const nav = (_lang, index) => [
  {
    text: ['Discussions', '討論', '', '讨论'][index],
    link: 'https://github.com/importantimport/urara/discussions',
  },
]

const sidebar = (lang, index) => [
  {
    text: ['Getting Started', '入門', 'はじめに', '入门'][index],
    children: [
      {
        text: ['Intro', '介紹', '紹介', '介绍'][index],
        link: lang + 'getting-started/intro',
      },
      {
        text: ['Quick Start', '快速開始', 'クイックスタート', '快速开始'][index],
        link: lang + 'getting-started/quick-start',
      },
      {
        text: ['Configuration', '配置', '設定', '配置'][index],
        link: lang + 'getting-started/configuration',
      },
    ],
  },
]

const locales = (lang, index) => ({
  selectText: ['Languages', '語言', '言語', '语言'][index],
  label: ['English', '正體中文', '日本語', '简体中文'][index],
  editLinkText: [
    'Edit on GitHub',
    '在 GitHub 上編輯',
    'GitHub でこのページを編集',
	'在 GitHub 上编辑',
  ][index],
  lastUpdated: ['Last Updated', '最後更新于', '最終更新', '最后更新于'][index],
  nav: nav(lang, index),
  sidebar: sidebar(lang, index),
})

const themeConfig = {
  locales: {
    '/': locales('/', 0),
    '/zh/': locales('/zh/', 1),
    // '/ja/': locales('/ja/', 2),
	'/zh-hans/': locales('/zh-hans/', 3),
  },
  editLinks: true,
  repo: 'importantimport/urara-docs',
  docsBranch: 'main',
  author: '藍',
}

export default defineConfig({
  title: 'Urara',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
  ],
  description: 'Sweet & Powerful SvelteKit Blog Template.',
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': { lang: 'en-US' },
    '/zh/': { lang: 'zh-TW' },
    // '/ja/': { lang: 'ja-JP' }
	'/zh-hans/': { lang: 'zh-Hans'},
  },
  themeConfig: themeConfig,
})

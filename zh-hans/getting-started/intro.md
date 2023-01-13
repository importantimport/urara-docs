# 介绍

Urara 是一个基于 SvelteKit 的现代博客模板。

## 特征

- 开箱即用的 **Atom feed** (WebSub), **Sitemap**, **PWA** (Web app manifest & ServiceWorker) 支持。
- 使用 [**daisyUI**](https://github.com/saadeghi/daisyui) 呈现精美的界面设计和动画效果，当然。
- 良好的 [**IndieWeb**](https://indieweb.org/) 兼容性 - 支持带有 [**microformats2**](https://microformats.org/) 标签的多种文章类型，通过 [**webmentions.io**](https://webmentions.io) API 展示 [**Webmentions**](https://webmention.org/)。
- 不用担心文章和图像目录 - 只要把它们放在一个文件夹下，它们就会在[**构建时自动复制**](https://github.com/importantimport/urara/blob/main/urara.js)。
- [**评论组件**](https://github.com/importantimport/urara/tree/main/src/lib/components/comments)： Webmentions、 Giscus、 Utterances... 你可以使用不止一个。

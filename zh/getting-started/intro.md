# 介绍

Urara 是一個基於 SvelteKit 的現代網誌模板。

## 特徵

- 開箱即用的 **Atom feed** (WebSub), **Sitemap**, **PWA** (Web app manifest & ServiceWorker) 支持。
- 使用 [**daisyUI**](https://github.com/saadeghi/daisyui) 呈現精美的界面設計和動畫效果，當然。
- 良好的 [**IndieWeb**](https://indieweb.org/) 兼容性 - 帶有 [**microformats2**](https://microformats.org/) 標記內容的多種帖子，通過 [**webmentions.io**](https://webmentions.io) API 展示 [**Webmentions**](https://indieweb.org/Webmention)。
- 不用擔心文章和圖像目錄 - 只需將它們放在一個文件夾下，它們就會在[**在構建時自動複製**](https://github.com/importantimport/urara/blob/main/urara.ts)。
- [**評論組件**](https://github.com/importantimport/urara/tree/main/src/lib/components/comments)： Webmentions、 Giscus、 Utterances... 你可以使用不止一個。

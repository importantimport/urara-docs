# 寫作

## 資源目錄

本項目使用 `/urara/` 作為資源與文章目錄，初始結構看上去像這樣：

```
.
├── assets
│   ├── any@180.png
│   ├── any@192.png
│   ├── any@512.png
│   ├── maskable@192.png
│   └── maskable@512.png
├── favicon.png
└── hello-world
    ├── elements
    │   └── +page.svelte.md
    ├── toc-disabled
    │   └── +page.md
    ├── urara.webp
    └── +page.svelte.md
```

Urara 僅處理后綴名為 `.md` 的 Markdown 文件，不會對其他文件進行處理。

> `+page.svelte.md` 與 `+page.md` 命名方式並無差別，僅用於標記是否使用了 Svelte 組件。

## 文章目錄

您可以在 `/urara/` 目錄下創建任意目錄，包含 `.md` 文件的目錄會被處理為文章頁面。

```text {4,6,8}
.
└── hello-world
    ├── elements
    │   └── +page.svelte.md
    ├── toc-disabled
    │   └── +page.md
    ├── urara.webp
    └── +page.svelte.md
```

以上內容在經過處理後，會生成三個頁面：

1. `example.com/hello-world/`
2. `example.com/hello-world/elements/`
3. `example.com/hello-world/toc-disabled/`

您可以根據想法隨意創建目錄，但注意：**請勿在同一目錄下存放多個 `.md` 檔案。**

## 文章元数据

在寫作時，您還需要編寫文章元數據，下方是一個示例：

```md
---
title: 'Hello World' // 標題
image: '/hello-world/urara.webp' // 題圖
created: 2021-11-01 // 創建時間
updated: 2021-12-12 // 更新時間
publish: 2021-11-04 // 發佈時間
tags: // 標籤
  - 'Hello World'
  - 'Urara'
flags: // 自定義標記
  - unlisted // 在主頁隱藏此文章
---
```

本項目與 [**FFF Flavored Frontmatter**](https://fff.js.org/) 規範相容，但並非所有變數都可以使用。

## 寫作格式

您可以使用 Markdown 語法來撰寫文章，這是一種轻量级標記語言。

從未聽說過此語法？您可以前往 [**Basic Syntax | Markdown Guide**](https://www.markdownguide.org/basic-syntax/) 學習基本語法。

本項目也同樣與部分 Markdown 擴展語法相容：[**Extended Syntax | Markdown Guide**](https://www.markdownguide.org/extended-syntax/)，下方列出了暫不可用的拓展語法：

- [**Heading IDs**](https://www.markdownguide.org/extended-syntax/#heading-ids)
- [**Definition Lists**](https://www.markdownguide.org/extended-syntax/#definition-lists)
- [**Using Emoji Shortcodes**](https://www.markdownguide.org/extended-syntax/#using-emoji-shortcodes)
- [**Highlight**](https://www.markdownguide.org/extended-syntax/#highlight)
- [**Subscript**](https://www.markdownguide.org/extended-syntax/#subscript)
- [**Superscript**](https://www.markdownguide.org/extended-syntax/#superscript)
- [**Disabling Automatic URL Linking**](https://www.markdownguide.org/extended-syntax/#disabling-automatic-url-linking)

## 插入媒體

您可以通過 Markdown 語法或 HTML 程式碼在文章中插入媒體內容。

當插入媒體時，需要注意存放媒體的目錄，例如您想在下方的 `hello-world` 文章中插入 `urara.webp`：

```text {5}
.
├── src
└── urara
    └── hello-world
        ├── urara.webp
        └── +page.svelte.md
```

填寫路徑時，請從項目中的`urara`目錄開始計算檔案路徑：

```md
![圖片描述](/hello-world/urara.webp)
```

## Svelte 組件

您可以在文章中使用 Svelte 組件，僅需在使用前導入組件：

```md
<script>
  import Component from '$lib/components/extra/component.svelte'
</script>
```

在使用時根據組件的需求填入訊息：

```md
<Component attribute="info"/>
```

本檔案同樣整理了可用於 Urara 的 Svelte 組件：[**文章組件**](https://urara-docs.netlify.app/zh/advanced/extension.html#文章組件)。

# 写作

## 资源目录

本项目使用 `/urara/` 作为资源与文章目录，初始结构看上去像这样：

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

Urara 仅处理后缀名为 `.md` 的 Markdown 文件，不会对其他文件进行处理。

> `+page.svelte.md` 与 `+page.md` 命名方式并无差别，仅用于标记是否使用了 Svelte 组件。

## 文章目录

您可以在 `/urara/` 目录下创建任意目录，包含 `.md` 文件的目录会被处理为文章页面。

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

以上内容在经过处理后，会生成三个页面：

1. `example.com/hello-world/`
2. `example.com/hello-world/elements/`
3. `example.com/hello-world/toc-disabled/`

您可以根据想法随意创建目录，但注意：**请勿在同一目录下存放多个 `.md` 文件。**

## 文章元数据

在写作时，您还需要编写文章元数据，下方是一个示例：

```md
---
title: 'Hello World' // 标题
image: '/hello-world/urara.webp' // 题图
created: 2021-11-01 // 创建时间
updated: 2021-12-12 // 更新时间
publish: 2021-11-04 // 发布时间
tags: // 标签
  - 'Hello World'
  - 'Urara'
flags: // 自定义标记
  - unlisted // 在主页隐藏此文章
---
```

本项目兼容 [**FFF Flavored Frontmatter**](https://fff.js.org/) 规范，但并非所有变量都可以使用。

## 写作格式

您可以使用 Markdown 语法来撰写文章，这是一种轻量级标记语言。

从未听说过此语法？您可以前往 [**Basic Syntax | Markdown Guide**](https://www.markdownguide.org/basic-syntax/) 学习基本语法。

本项目也同样兼容部分 Markdown 扩展语法：[**Extended Syntax | Markdown Guide**](https://www.markdownguide.org/extended-syntax/)，下方列出了暂不可用的拓展语法：

- [**Heading IDs**](https://www.markdownguide.org/extended-syntax/#heading-ids)
- [**Definition Lists**](https://www.markdownguide.org/extended-syntax/#definition-lists)
- [**Using Emoji Shortcodes**](https://www.markdownguide.org/extended-syntax/#using-emoji-shortcodes)
- [**Highlight**](https://www.markdownguide.org/extended-syntax/#highlight)
- [**Subscript**](https://www.markdownguide.org/extended-syntax/#subscript)
- [**Superscript**](https://www.markdownguide.org/extended-syntax/#superscript)
- [**Disabling Automatic URL Linking**](https://www.markdownguide.org/extended-syntax/#disabling-automatic-url-linking)

## 插入媒体

您可以通过 Markdown 语法或 HTML 代码在文章中插入媒体内容。

当插入媒体时，需要注意存放媒体的目录，例如您想在下方的 `hello-world` 文章中插入 `urara.webp`：

```text {5}
.
├── src
└── urara
    └── hello-world
        ├── urara.webp
        └── +page.svelte.md
```

填写路径时，请从项目中的 `urara` 目录开始计算文件路径：

```md
![图片描述](/hello-world/urara.webp)
```

## Svelte 组件

您可以在文章中使用 Svelte 组件，仅需在使用前导入组件：

```md
<script>
  import Component from '$lib/components/extra/component.svelte'
</script>
```

在使用时根据组件的需求填入信息：

```md
<Component attribute="info"/>
```

本文档同样整理了可用于 Urara 的 Svelte 组件：[**文章组件**](http://urara-docs.netlify.app/zh-hans/advanced/extension.html#文章组件)。

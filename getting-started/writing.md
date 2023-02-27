# Writing

## Resource Directory

This project uses `/urara/` as the resource and article directory, and the initial structure looks like this:

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

Urara only processes Markdown files with the suffix `.md`, and does not process other files.

> There is no difference between the `+page.svelte.md` and `+page.md` nomenclature, which is used only to mark whether the Svelte component is used.

## Article Directory

You can create any directory under the `/urara/` directory, and the directory containing the `.md` file will be processed as an article page.

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

The above content will generate three pages after processing:

1. `example.com/hello-world/`
2. `example.com/hello-world/elements/`
3. `example.com/hello-world/toc-disabled/`

You can create as many directories as you like, but note: **Do not store multiple `.md` files in the same directory.**

## Article Metadata

When writing, you will also need to write article metadata, an example of which is shown below:

```md
---
title: 'Hello World' // title
image: '/hello-world/urara.webp' // title image
created: 2021-11-01 // create time
updated: 2021-12-12 // update time
published: 2021-11-04 // publish time
tags: // label
  - 'Hello World'
  - 'Urara'
flags: // custom flags
  - unlisted // hide article on the home page
---
```

This project is compatible with the [**FFF Flavored Frontmatter**](https://fff.js.org/) specification, but not all variables can be used.

## Writing Format

You can write articles using Markdown syntax, which is a lightweight markup language.

If you have never heard of Markdown, you can learn the basic syntax at [**Basic Syntax | Markdown Guide**](https://www.markdownguide.org/basic-syntax/).

This project is also compatible with some of Markdown's extended syntax: [**Extended Syntax | Markdown Guide**](https://www.markdownguide.org/extended-syntax/), and the following extended syntax is not available at this time.

- [**Heading IDs**](https://www.markdownguide.org/extended-syntax/#heading-ids)
- [**Definition Lists**](https://www.markdownguide.org/extended-syntax/#definition-lists)
- [**Using Emoji Shortcodes**](https://www.markdownguide.org/extended-syntax/#using-emoji-shortcodes)
- [**Highlight**](https://www.markdownguide.org/extended-syntax/#highlight)
- [**Subscript**](https://www.markdownguide.org/extended-syntax/#subscript)
- [**Superscript**](https://www.markdownguide.org/extended-syntax/#superscript)
- [**Disabling Automatic URL Linking**](https://www.markdownguide.org/extended-syntax/#disabling-automatic-url-linking)

## Inserting Media

You can insert media content into your article via Markdown syntax or HTML code.

When inserting media, pay attention to the directory where the media is stored, for example, to insert `urara.webp` in the following `hello-world` article:

```text {5}
.
├── src
└── urara
    └── hello-world
        ├── urara.webp
        └── +page.svelte.md
```

When filling in the path, calculate the file path starting from the `urara` directory in the project:

```md
![image description](/hello-world/urara.webp)
```

## Svelte Components

You can use Svelte components in your articles by simply importing them before use:

```md
<script>
  import Component from '$lib/components/extra/component.svelte'
</script>
```

Fill in the information according to the needs of the component at the time of use:

```md
<Component attribute="info"/>
```

This document also organizes the Svelte components that can be used in Urara: [**Article Components**](http://urara-docs.netlify.app/advanced/extension.html#article-component).

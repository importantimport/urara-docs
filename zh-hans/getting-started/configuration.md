# 配置

## 配置文件

本项目使用 `/src/lib/config/` 作为配置文件目录，但多数配置在一般情况下无需修改。

### site.ts | 站点信息

```ts
export const site: SiteConfig = {
  protocol: 'https://', // 协议（一般无需更改）
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app', // 域名
  title: 'Urara', // 标题
  subtitle: 'Sweet & Powerful SvelteKit Blog Template', // 副标题
  lang: 'zh-CN', // 语言
  descr: 'Powered by SvelteKit/Urara', // 描述
  author: {
    name: 'John Doe', // 作者名称
    avatar: '/assets/maskable@512.png', // 作者图片
    status: '🌸', // 作者状态
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.' // 作者描述
  },
  themeColor: '#3D4451' // 主题颜色（目前仅用于 Manifest）
}
```

### icon.ts | 图标

默认提供一些图标以兼容 Web app manifests 及现代浏览器，可以自行替换。

```
/urara/favicon.png - 网站图标，32x32
/urara/assets/any@180.png - 网站图标，180x180
/urara/assets/any@192.png - 网站 / Manifest 图标，192x192
/urara/assets/any@512.png - Manifest 图标，512x512
/urara/assets/manifest@192.png - Manifest 遮罩图标，192x192
/urara/assets/manifest@512.png - Manifest 遮罩图标，512x512
```

也可以通过修改 `/src/lib/config/icon.ts` 替换图标数量及路径。

### general.ts | 主题

```ts
export const theme: ThemeConfig = [
  {
    name: 'light', // 主题变量名
    text: '🌕 Light' // 主题显示名，可随意修改
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
]
```

本项目使用了 [**daisyUI**](https://daisyui.com/) 主题，查看可用的 [**daisyUI 主题**](https://daisyui.com/docs/themes/?lang=zh_cn)。

### general.ts | 标题栏

```ts
export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started', // 按钮名称
      link: '/hello-world' // 指向的网页，可以填写其他网页
    },
    {
      text: 'Elements',
      link: '/hello-world/elements'
    }
  ]
}
```

还可以根据下面的格式在标题栏添加下拉菜单。

```ts
{
   text: 'Hello World',
   children: [
     {
      text: 'Get Started',
      link: '/hello-world'
     },
     {
       text: 'Elements',
       link: '/hello-world/elements'
     },
	 {
	   text: 'ToC Disabled',
	   link: '/hello-world/toc-disabled'
	 }
   ]
}
```

### general.ts | 页脚

大致与标题相同，下拉菜单除外。

```ts
export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed', // 超链接名称
      link: '/atom.xml' // 指向的页面，可以填写其他网页
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}
```

### general.ts | 日期格式

```ts
export const date: DateConfig = {
  locales: 'zh-CN', // 语言，可参考 IETF 语言标签
  options: {
    year: '2-digit', // 年份: numeric / 2-digit
    weekday: 'long', // 星期: narrow / short / long
    month: 'short', // 月份: numeric / 2-digit / narrow / short / long
    day: 'numeric' // 日期: numeric / 2-digit
  }
}
```

要添加其他选项，请参考 [**Intl.DateTimeFormat - JavaScript | MDN**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)。

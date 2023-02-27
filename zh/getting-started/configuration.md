# 配置

## 配置文件

本項目使用 `/src/lib/config/` 作爲配置文件目錄，但多數配置在一般情況下無需修改。

### site.ts | 網站信息

```ts
export const site: SiteConfig = {
  protocol: 'https://', // 協議（一般無需更改）
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app', // 域名
  title: 'Urara', // 標題
  subtitle: 'Sweet & Powerful SvelteKit Blog Template', // 副標題
  lang: 'en-US', // 語言
  descr: 'Powered by SvelteKit/Urara', // 描述
  author: {
    name: 'John Doe', // 作者名稱
    avatar: '/assets/maskable@512.png', // 作者圖片
    status: '🌸', // 作者狀態
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.' // 作者描述
  },
  themeColor: '#3D4451' // 主題顔色（目前僅用於 Manifest）
}
```

### icon.ts | 圖示

默認提供一些圖示以兼容 Web app manifests 及現代瀏覽器，可以自行替換。

```
/urara/favicon.png - 網站圖示，32x32
/urara/assets/any@180.png - 網站圖示，180x180
/urara/assets/any@192.png - 網站 / Manifest 圖示，192x192
/urara/assets/any@512.png - Manifest 圖示，512x512
/urara/assets/manifest@192.png - Manifest 遮罩圖示，192x192
/urara/assets/manifest@512.png - Manifest 遮罩圖示，512x512
```

也可以通過修改 `/src/lib/config/icon.ts` 替換圖示數量及路徑。

### general.ts | 主題

```ts
export const theme: ThemeConfig = [
  {
    name: 'light', // 主題變量名
    text: '🌕 Light' // 主題顯示名，可修改
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
]
```

本項目使用了 [**daisyUI**](https://daisyui.com/) 主題，查看可用的 [**daisyUI 主題**](https://daisyui.com/docs/themes/?lang=zh_tw)。

### general.ts | 標題欄

```ts
export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started', // 按鈕名稱
      link: '/hello-world' // 指向的頁面，可以填寫其他網站
    },
    {
      text: 'Elements',
      link: '/hello-world/elements'
    }
  ]
}
```
還可以根據下面的格式在標題欄添加下拉選單。

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

### general.ts | 頁腳

大致與標題相同，下拉選單除外。

```ts
export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed', // 超連結名稱
      link: '/atom.xml' // 指向的頁面，可以填寫其他網站
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
  locales: 'en-US', // 語言，可參考 IETF 語言標籤
  options: {
    year: '2-digit', // 年份: numeric / 2-digit
    weekday: 'long', // 星期: narrow / short / long
    month: 'short', // 月份: numeric / 2-digit / narrow / short / long
    day: 'numeric' // 日期: numeric / 2-digit
  }
}
```

要添加更多選項，請參考 [**Intl.DateTimeFormat - JavaScript | MDN**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)。

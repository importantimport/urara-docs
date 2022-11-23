# 配置

## 配置文件

本项目使用 `/src/lib/config/` 作为文件配置目录，但多数配置在一般情况下无需修改

从 site.ts 开始：

```ts
export const site: SiteConfig = {
  protocol: 'https://', // 协议（一般无需更改）
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app', // 域名
  title: 'Urara', // 标题
  subtitle: 'Sweet & Powerful SvelteKit Blog Template', // 副标题
  lang: 'en-US', // 语言
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

## 图片

默认提供一些图片以兼容 Web app manifests 及现代浏览器，可以自行替换。

```text
/urara/favicon.png - 网站图标，32x32
/urara/assets/any@180.png - 网站图片，180x180
/urara/assets/any@192.png - 网站 / Manifest 图片，192x192
/urara/assets/any@512.png - Manifest 图片，512x512
/urara/assets/manifest@192.png - Manifest 遮罩图片，192x192
/urara/assets/manifest@512.png - Manifest 遮罩图片，512x512
```

也可以通过修改 `/src/lib/config/icon.ts` 替换图片数量及路径。
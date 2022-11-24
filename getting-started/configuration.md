# Configuration

## Config files

This project uses `/src/lib/config/` as the config file directory, but most configurations do not need to be modified in general.

### site.ts | Site Info

```ts
export const site: SiteConfig = {
  protocol: 'https://', // site protocol (usually no change is required)
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app', // site domain
  title: 'Urara', // title
  subtitle: 'Sweet & Powerful SvelteKit Blog Template', // subtitle
  lang: 'en-US', // language
  descr: 'Powered by SvelteKit/Urara', // description
  author: {
    name: 'John Doe', // author name
    avatar: '/assets/maskable@512.png', // author image
    status: '🌸', // author status
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.' // author bio
  },
  themeColor: '#3D4451' // theme color (currently only used in Manifest)
}
```

### general.ts | Theme

```ts
export const theme: ThemeConfig = [
  {
    name: 'light', // Theme varable name
    text: '🌕 Light' // Theme display name, can be modified
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
]
```

This project uses the [daisyUI](https://daisyui.com/) theme, see the availble [daisyUI themes](https://daisyui.com/docs/themes/?lang=en).

### general.ts | Header

```ts
export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started', // Button name
      link: '/hello-world' // Link to page, or other sites
    },
    {
      text: 'Elements',
      link: '/hello-world/elements'
    }
  ]
}
```

Dropdown menu can added to the header following the format below.

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

### general.ts | Footer

Same as the Header, except the dropdown menu.

```ts
export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed', // Hypelink name
      link: '/atom.xml' // Link to page, or other sites
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}
```

### general.ts | Date Format

```ts
export const date: DateConfig = {
  locales: 'en-US', // Language，refer to IETF language tag
  options: {
    year: '2-digit', // Year: `numeric`, `2-digit
    weekday: 'long', // Week: `narrow`, `short`, `long`
    month: 'short', // Month: `numeric`, `2-digit`, `narrow`, `short`, `long`
    day: 'numeric' // day: `numeric`, `2-digit`
  }
}
```

For more additonal, see [Intl.DateTimeFormat - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### icon.ts | Icons

Some icons are provided by default to be compatible with web app manifests and modern browsers, and can be replaced by yourself.

```text
/urara/favicon.png - Website icon, 32x32
/urara/assets/any@180.png - Website icon, 180x180
/urara/assets/any@192.png - Website/Manifest icon, 192x192
/urara/assets/any@512.png - Manifest icon, 512x512
/urara/assets/manifest@192.png - Manifest mask icon, 192x192
/urara/assets/manifest@512.png - Manifest mask icon, 512x512
```

You can also replace the number of icons and their paths by modifying `/src/lib/config/icon.ts`.

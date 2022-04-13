## Configuration

## Config files

This project uses `/src/lib/config/` as the config file directory, but most configurations do not need to be modified in general.

Starting from site.ts.

```ts
export const site: Site = {
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
  url: (import.meta.env.URARA_SITE_URL as string) ? 'https://example.com', // domain
  themeColor: '#3D4451' // theme color (currently only used in Manifest)
}
```

## Icons

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
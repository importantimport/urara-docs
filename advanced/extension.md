# Extensions

It is people like you who bring extension plugins to this project, and the following lists the extensions that have been included in this document.

## Article component

### YouTube

#### Made by [藍+85CD](https://github.com/kwaa) | Demo - [Urara](https://urara-demo.netlify.app/hello-world/elements#svelte-components)

<details>
  <summary>Configuration</summary>
  
  **✅ This extension is included in Urara, no additional download is needed.**

  #### Components to be imported before use:

  ```md
  <script>
    import YouTube from '$lib/components/extra/youtube.svelte'
  </script>
  ```

  #### Usage:

  ```md
  <YouTube id="<WysuxO4yR04>" />
  ```

  This extension will show the [https://www.youtube.com/watch?v=<u>**WysuxO4yR04**</u>](https://www.youtube.com/watch?v=WysuxO4yR04) video within your post.

  You can also refer to the use case source code: [**urara/+page.svelte.md at main · importantimport/urara**](https://github.com/importantimport/urara/blob/main/urara/hello-world/elements/+page.svelte.md?plain=1#L139).

</details>

### Profile Card

#### Made by [藍+85CD](https://github.com/kwaa) | Demo - [./kwaa.dev](https://kwaa.dev/about#关于我)

<details>
  <summary>Configuration</summary>
  
  **⚠ This extension is not yet included in Urara, you need to download the component manually.**

  Download the [**profile.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/profile/profile.svelte) file and put it in the `src/lib/components/extra/` directory.

  #### Components to be imported before use:

  ```md
  <script lang="ts">
    import Profile from '$lib/components/extra/profile.svelte'
  </script>
  ```

  #### Usage:

  ```md
  <Profile subname="Here is the last name."/>
  ```

  This extension will display a profile card within your post, where the avatar, name and profile will follow your settings in `site.ts`, and you can also specify them manually via  `avatar="<image path>"`, `name="name"` and ``bio={`bio`}``.

  ```md
  <Profile name="name" avatar="/assets/maskable@512.png" subname="Here is the last name." bio={`Here is the bio <br>This is the second line of the bio.`} />
  ```

  You can also refer to the use case source code: [**blog/+page.svelte.md at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/urara/about/+page.svelte.md?plain=1#L13).

</details>

### Alert

#### Made by [藍+85CD](https://github.com/kwaa) | Demo - [Seviche.cc](https://seviche.cc/2022-12-20-pleroma-mod/)

<details>
  <summary>Configuration</summary>
  
  **✅ This extension is included in Urara, no additional download is needed.**

  #### Components to be imported before use:

  ```md
  <script>
    import Alert from '$lib/components/extra/alert.svelte'
  </script>
  ```

  #### Usage:

  ```md
  <Alert status="warning" description="warning message" title="warning title"/>
  ```

  You can modify the status of the prompt as needed. The available options are: `info`, `success`, `warning` and `error`.

  You can also refer to the use case source code: [**Urara-Blog/+page.svelte.md at main · Sevichecc/Urara-Blog**](https://github.com/Sevichecc/Urara-Blog/blob/main/urara/2022-12-20-pleroma-mod/+page.svelte.md?plain=1#L12).

</details>

## Comment System

### Giscus

#### Made by [藍+85CD](https://github.com/kwaa) | Demo - [./kwaa.dev](https://kwaa.dev/intro-urara#post-comment)

<details>
  <summary>Configuration</summary>
  
  **✅ This extension is included in Urara, no additional download is needed.**

  #### Usage:

  Visit the [**Giscus**](https://giscus.app/) page for configuration. After following the steps to configure, you will get the following:

  ```ts
  <script src="https://giscus.app/client.js"
        data-repo="[enter repository here]"
        data-repo-id="[enter repository ID here]"
        data-category="[enter category name here]"
        data-category-id="[enter category ID here]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
  </script>
  ```

  Next, you will need to modify the `src/config/post.ts` file as required:

  ```ts
  import type { PostConfig } from '$lib/types/post'

  export const post: PostConfig = {
    comment: {
      use: ['Giscus', 'other comment systems'],
      style: 'boxed', // comment system bar styles: none / bordered / lifted / boxed
      giscus: {
        repo: '[enter repository here]',
        repoID: '[enter repository ID here]',
        category: '[enter category name here]',
        categoryID: '[enter category ID here]',
        reactionsEnabled: true, // reactions: true / false
        inputPosition: 'top' // position of comment box: top / bottom
        lang: 'zh-CN', // language
        theme: 'preferred_color_scheme' // theme
      }
    }
  }
  ```

  ⚠ This extension enables the `pathname` mapping method and `lazyload` loading option for Giscus by default.

  Once configured, Giscus is ready to use and will be displayed after the end of the article.

  You can also refer to the use case source code: [**blog/post.ts at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/src/lib/config/post.ts#L17).

</details>

### Utterances

#### Made by [藍+85CD](https://github.com/kwaa)

<details>
  <summary>Configuration</summary>
  
  **✅ This extension is included in Urara, no additional download is needed.**

  #### Usage:

  Visit the [**Utterances**](https://utteranc.es/) page for configuration. After following the steps to configure, you will get the following:

  ```ts
  <script src="https://utteranc.es/client.js"
        repo="[enter repository here]"
        issue-term="pathname"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
  </script>
  ```

  Next, you will need to modify the `src/config/post.ts` file as required:

  ```ts
  import type { PostConfig } from '$lib/types/post'

  export const post: PostConfig = {
    comment: {
      use: ['Utterances', 'other comment systems'],
      style: 'boxed', // comment system bar styles: none / bordered / lifted / boxed
      utterances: {
        repo: '[enter repository here]',
        lable: '', // lable
        theme: 'preferred-color-scheme', // theme
      }
    }
  }
  ```

  ⚠ This extension enables the `pathname` mapping method for Utterances by default.

  Once configured, Utterances is ready to use and will be displayed after the end of the article.

</details>

## Interface components

### Action Buttons

<details>
  <summary>Configuration</summary>
  
  **⚠ These extensions are not yet included in Urara, you need to download the components manually.**

  #### Components to be downloaded before use:


  - **Reply: [reply.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/reply.svelte) - <small>Made by [藍+85CD](https://github.com/kwaa) | Demo - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**

  - **Share: [share.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/share.svelte) - <small>Made by [藍+85CD](https://github.com/kwaa) | Demo - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**
  
  - **Translate: [translate.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/translate.svelte) - <small>Made by [藍+85CD](https://github.com/kwaa) | Demo - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**


  After downloading the required action buttons above, create a new folder named `actions` in the `src/lib/components/` directory and put it there.

  #### Usage:

  When you have completed the above settings, the function buttons are available, please note: **This extension will only be displayed when the width of the article page is sufficient**.

  You can also refer to the use case source code: [**blog/src/lib/components/actions at main · kwaa/blog**](https://github.com/kwaa/blog/tree/main/src/lib/components/actions).

</details>

## Page Expansion

### Friends

#### Made by [藍+85CD](https://github.com/kwaa) | Demo - [./kwaa.dev](https://kwaa.dev/friends)

<details>
  <summary>Configuration</summary>
  
  **⚠ This extension is not yet included in Urara, you need to download the component manually.**

  1. Download the [**friend.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/friend.svelte) file and put it in the `src/lib/components/extra/` directory.

  2. Download the [**+page.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/%2Bpage.svelte) file and create a new folder named `friends` in the `src/routes/` directory and put it there.

  3. Download the [**friends.ts**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/friends.ts) file and put it in the `src/lib/config/` directory.

  4. Install the `svelte-bricks` dependence: 

  ```bash
  pnpm add -D svelte-bricks
  ```

  #### Usage:

  The default style is provided in ``friends.ts`` and can be replaced by yourself:
  
  ```ts
  export const friends: Friend[] = [
    {
      id: 'id', // HTML ID
      rel: 'friend', // contact type: contact / acquaintance / friend
      name: 'Name', // friend nickname
      title: 'Title', // title
      avatar: '/favicon.png', // friend avatar
      link: 'https://urara-demo.netlify.app/', // link
      descr: 'A Descriptions.', //  friend description
    }
  ]
  ```

  You can also refer to the use case source code: [**blog/friends.ts at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/src/lib/config/friends.ts#L29).

</details>

### Projects

#### Made by [SevicheCC](https://github.com/sevichecc) | Demo - [Seviche.cc](https://seviche.cc/projects)

<details>
  <summary>Configuration</summary>
  
  **⚠ This extension is not yet included in Urara, you need to download the component manually.**

  1. Download the [**projects.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/project/projects.svelte) file and put it in the `src/lib/components/extra/` directory.

  2. Download the [**+page.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/project/%2Bpage.svelte) file and create a new folder named `projects` in the `src/routes/` directory and put it there.

  3. Download the [**project.ts**](https://github.com/importantimport/urara-docs/raw/master/public/extension/project/project.ts) file and put it in the `src/lib/config/` directory.

  #### Usage:

  The default style is provided in ``projects.ts`` and can be replaced by yourself:
  
  ```ts
  export type Project = {
    id: string
    name: string
    tags?: string[]
    feature?: string
    description?: string
    img: string
    link?: string
  }

  export const projects: Project[] = [
    {
      id: 'urara', // HTML ID
      name: 'Urara', // project Name
      tags: ['Svelte', 'TypeScript'],  // tag
      description: // description
        "🌸 Sweet, Powerful, IndieWeb-Compatible SvelteKit Blog Starter. [δ](Delta)",
      feature: 'Svelte', // feature
      img: 'https://github.com/importantimport/urara/raw/main/urara/hello-world/urara.webp',
      link: 'https://github.com/importantimport/urara'
    }
  ]
  ```

  You can also refer to the use case source code: [**Urara-Blog/projects.ts at main · Sevichecc/Urara-Blog**](https://github.com/Sevichecc/Urara-Blog/blob/main/src/lib/config/projects.ts#L11).

</details>
# 拓展

正是像您这样的人为本项目带来了拓展插件，下面列出了本文档中已收录的拓展。

## 文章组件

### YouTube

#### 由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [Urara](https://urara-demo.netlify.app/hello-world/elements#svelte-components)

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，无需额外下载。**

  #### 在使用前需导入组件：

  ```md
  <script>
    import YouTube from '$lib/components/extra/youtube.svelte'
  </script>
  ```

  #### 使用方法：

  ```md
  <YouTube id="<WysuxO4yR04>" />
  ```

  此拓展会在您的文章内展示 [https://www.youtube.com/watch?v=<u>**WysuxO4yR04**</u>](https://www.youtube.com/watch?v=WysuxO4yR04) 视频。

  您还可以参考使用例源码：[urara/+page.svelte.md at main · importantimport/urara](https://github.com/importantimport/urara/blob/main/urara/hello-world/elements/+page.svelte.md?plain=1#L139)。

</details>

### 资料卡片

#### 由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [./kwaa.dev](https://kwaa.dev/about#关于我)

<details>
  <summary>配置</summary>
  
  **⚠ 此拓展尚未包含在 Urara 中，您需要手动下载组件。**

  下载 [**profile.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/profile/profile.svelte) 文件，将其放入 `src/lib/components/extra/` 目录内。

  #### 在使用前需导入组件：

  ```md
  <script lang="ts">
    import Profile from '$lib/components/extra/profile.svelte'
  </script>
  ```

  #### 使用方法：

  ```md
  <Profile subname="这里是姓氏" >
    <div class="flex flex-col md:flex-row gap-4 mt-4"></div>
  </Profile>
  ```

  此拓展会在您的文章内展示个人资料卡片，其中头像、姓名和简介会跟随您在 `site.ts` 的设定，您还可以通过 `avatar="<图片路径>"` 、 `name="姓名"` 和 ``bio={`简介`}`` 来手动指定它们：

  ```md
  <Profile name="姓名" avatar="/assets/maskable@512.png" subname="这里是姓氏" bio={`这里是简介。<br>这是第二行简介。`} >
    <div class="flex flex-col md:flex-row gap-4 mt-4"></div>
  </Profile>
  ```

  您还可以参考使用例源码：[blog/+page.svelte.md at main · kwaa/blog](https://github.com/kwaa/blog/blob/main/urara/about/+page.svelte.md?plain=1#L13)。

</details>

## 评论系统

### Giscus

#### 由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara#post-comment)

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，无需额外下载。**

  #### 使用方法：

  访问 [Giscus](https://giscus.app/zh-CN) 页面进行配置，按照步骤配置后，您会获得以下内容：

  ```ts
  <script src="https://giscus.app/client.js"
        data-repo="[在此输入仓库]"
        data-repo-id="[在此输入仓库 ID]"
        data-category="[在此输入分类名]"
        data-category-id="[在此输入分类 ID]"
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

  接下来，您需要根据需求修改 `src/config/post.ts` 文件：

  ```ts
  import type { PostConfig } from '$lib/types/post'

  export const post: PostConfig = {
    comment: {
      use: ['Giscus', '其他评论系统'],
      style: 'boxed', // 评论系统栏样式：none / bordered / lifted / boxed
      giscus: {
        repo: '[在此输入仓库]',
        repoID: '[在此输入仓库 ID]',
        category: '[在此输入分类名]',
        categoryID: '[在此输入分类 ID]',
        reactionsEnabled: true, // 表情回应：true / false
        inputPosition: 'top' // 评论框位置：top / bottom
        lang: 'zh-CN', // 语言
        theme: 'preferred_color_scheme' // 主题
      }
    }
  }
  ```

  ⚠ 此拓展为 Giscus 默认启用了 `pathname` 映射方式与 `lazyload` 加载选项。

  配置完成后，Giscus 既可使用，将显示在文章末尾后。

  您还可以参考使用例源码：[blog/post.ts at main · kwaa/blog](https://github.com/kwaa/blog/blob/main/src/lib/config/post.ts#L17)。

</details>

### Utterances

#### 由 [藍+85CD](https://github.com/kwaa) 制作

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，无需额外下载。**

  #### 使用方法：

  访问 [Utterances](https://utteranc.es/) 页面进行配置，按照步骤配置后，您会获得以下内容：

  ```ts
  <script src="https://utteranc.es/client.js"
        repo="[在此输入仓库]"
        issue-term="pathname"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
  </script>
  ```

  接下来，您需要根据需求修改 `src/config/post.ts` 文件：

  ```ts
  import type { PostConfig } from '$lib/types/post'

  export const post: PostConfig = {
    comment: {
      use: ['Utterances', '其他评论系统'],
      style: 'boxed', // 评论系统栏样式：none / bordered / lifted / boxed
      utterances: {
        repo: '[在此输入仓库]',
        lable: '', // 标签
        theme: 'preferred-color-scheme', // 主题
      }
    }
  }
  ```

  ⚠ 此拓展为 Utterances 默认启用了 `pathname` 映射方式。

  配置完成后，Utterances 既可使用，将显示在文章末尾后。

</details>

## 界面组件

### 功能按钮

<details>
  <summary>配置</summary>
  
  **⚠ 这些拓展尚未包含在 Urara 中，您需要手动下载组件。**

  #### 在使用前需下载组件：

  - **回复：[reply.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/reply.svelte) - <small>由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**

  - **分享：[share.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/share.svelte) - <small>由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**
  
  - **翻译：[translate.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/translate.svelte) - <small>由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**


  在上方下载需要的功能按钮后，在 `src/lib/components/` 目录下新建一个名为 `actions` 的文件夹，放入其中。

  #### 使用方法：

  当您完成以上设定后，功能按钮已可用，需要注意：**此拓展仅在文章页面宽度足够时才会显示**。

  您还可以参考使用例源码：[**blog/src/lib/components/actions at main · kwaa/blog**](https://github.com/kwaa/blog/tree/main/src/lib/components/actions)。

</details>

## 页面拓展

### 友链

#### 由 [藍+85CD](https://github.com/kwaa) 制作 | 演示 - [./kwaa.dev](https://kwaa.dev/friends)

<details>
  <summary>配置</summary>
  
  **⚠ 此拓展尚未包含在 Urara 中，您需要手动下载组件。**

  1. 下载 [**friend.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/friend.svelte) 文件，放入 `src/lib/components/extra/` 目录。

  2. 下载 [**+page.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/%2Bpage.svelte) 文件，在 `src/routes/` 目录下新建一个名为 `friends` 的文件夹，放入其中。

  3. 下载 [**friends.ts**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/friends.ts) 文件，放入 `src/lib/config/` 目录。

  4. 安装 `svelte-bricks` 依賴：

  ```bash
  pnpm add -D svelte-bricks
  ```

  #### 使用方法：

  `friends.ts` 中提供了默认样式，可以自行替换：
  
  ```ts
  export const friends: Friend[] = [
    {
      id: 'id', // HTML ID
      rel: 'friend', // 联系人类型：contact / acquaintance / friend
      name: 'Name', // 朋友昵称
      title: 'Title', // 标题
      avatar: '/favicon.png', // 朋友图片
      link: 'https://urara-demo.netlify.app/', // 链接
      descr: 'A Descriptions.', // 朋友描述
    }
  ]
  ```

  您还可以参考使用例源码：[**blog/friends.ts at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/src/lib/config/friends.ts#L29)。

</details>
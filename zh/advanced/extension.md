# 拓展

正是像您這樣的人為本項目帶來了拓展挿件，下麵列出了本文件中已收錄的拓展。

## 文章組件

### YouTube

#### 由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [Urara](https://urara-demo.netlify.app/hello-world/elements#svelte-components)

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，無需額外下載。**

  #### 在使用前需導入組件：

  ```md
  <script>
    import YouTube from '$lib/components/extra/youtube.svelte'
  </script>
  ```

  #### 使用方法：

  ```md
  <YouTube id="<WysuxO4yR04>" />
  ```

  此拓展會在您的文章內展示 [https://www.youtube.com/watch?v=<u>**WysuxO4yR04**</u>](https://www.youtube.com/watch?v=WysuxO4yR04) 視頻。

  您還可以參考使用例源碼：[**urara/+page.svelte.md at main · importantimport/urara**](https://github.com/importantimport/urara/blob/main/urara/hello-world/elements/+page.svelte.md?plain=1#L139)。

</details>

### 資料卡片

#### 由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [./kwaa.dev](https://kwaa.dev/about#关于我)

<details>
  <summary>配置</summary>
  
  **⚠ 此拓展尚未包含在 Urara 中，您需要手動下載組件。**

  下載 [**profile.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/profile/profile.svelte) 文件，將其放入 `src/lib/components/extra/` 目錄內。

  #### 在使用前需導入組件：

  ```md
  <script lang="ts">
    import Profile from '$lib/components/extra/profile.svelte'
  </script>
  ```

  #### 使用方法：

  ```md
  <Profile subname="這裡是姓氏"/>
  ```

  此拓展會在您的文章內展示個人資料卡片，其中頭像、姓名和簡介會跟隨您在 `site.ts` 的設定，您還可以通過 `avatar="<圖片路徑>"` 、 `name="姓名"` 和 ``bio={`簡介`}`` 來手動指定它們：

  ```md
  <Profile name="姓名" avatar="/assets/maskable@512.png" subname="這裡是姓氏" bio={`這裡是簡介。<br>這是第二行簡介。`} />
  ```

  您還可以參考使用例源碼：[**blog/+page.svelte.md at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/urara/about/+page.svelte.md?plain=1#L13)。

</details>

### 狀態提示

#### 由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [Seviche.cc](https://seviche.cc/2022-12-20-pleroma-mod/)

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，無需額外下載。**

  #### 在使用前需導入組件：

  ```md
  <script>
    import Alert from '$lib/components/extra/alert.svelte'
  </script>
  ```

  #### 使用方法：

  ```md
  <Alert status="warning" description="警告資訊" title="警告標題"/>
  ```

  您可以根據需要修改提示的狀態，可用的選項有：`info`、`success`、`warning` 和 `error`。

  您還可以參考使用例源碼：[**Urara-Blog/+page.svelte.md at main · Sevichecc/Urara-Blog**](https://github.com/Sevichecc/Urara-Blog/blob/main/urara/2022-12-20-pleroma-mod/+page.svelte.md?plain=1#L12)。

</details>

## 評論系統

### Giscus

#### 由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara#post-comment)

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，無需額外下載。**

  #### 使用方法：

  訪問 [**Giscus**](https://giscus.app/zh-CN) 頁面進行配置，按照步驟配置後，您會獲得以下內容：

  ```ts
  <script src="https://giscus.app/client.js"
        data-repo="[在此輸入倉庫]"
        data-repo-id="[在此輸入倉庫 ID]"
        data-category="[在此輸入分類名]"
        data-category-id="[在此輸入分類 ID]"
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

  接下來，您需要根據需求修改 `src/config/post.ts` 文件：

  ```ts
  import type { PostConfig } from '$lib/types/post'

  export const post: PostConfig = {
    comment: {
      use: ['Giscus', '其他評論系統'],
      style: 'boxed', // 評論系統欄樣式：none / bordered / lifted / boxed
      giscus: {
        repo: '[在此輸入倉庫]',
        repoID: '[在此輸入倉庫 ID]',
        category: '[在此輸入分類名]',
        categoryID: '[在此輸入分類 ID]',
        reactionsEnabled: true, // 表情回應：true / false
        inputPosition: 'top' // 評論框位置：top / bottom
        lang: 'zh-CN', // 語言
        theme: 'preferred_color_scheme' // 主題
      }
    }
  }
  ```

  ⚠ 此拓展為 Giscus 默認啟用了 `pathname` 映射方法與 `lazyload` 加載選項。

  配置完成後，Giscus 既可使用，將顯示在文章末尾後。

  您還可以參考使用例源碼：[**blog/post.ts at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/src/lib/config/post.ts#L17)。

</details>

### Utterances

#### 由 [藍+85CD](https://github.com/kwaa) 製作

<details>
  <summary>配置</summary>
  
  **✅ 此拓展已包含在 Urara 中，無需額外下載。**

  #### 使用方法：

  訪問 [**Utterances**](https://utteranc.es/) 頁面進行配置，按照步驟配置後，您會獲得以下內容：

  ```ts
  <script src="https://utteranc.es/client.js"
        repo="[在此輸入倉庫]"
        issue-term="pathname"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
  </script>
  ```

  接下來，您需要根據需求修改 `src/config/post.ts` 文件：

  ```ts
  import type { PostConfig } from '$lib/types/post'

  export const post: PostConfig = {
    comment: {
      use: ['Utterances', '其他評論系統'],
      style: 'boxed', // 評論系統欄樣式：none / bordered / lifted / boxed
      utterances: {
        repo: '[在此輸入倉庫]',
        lable: '', // 標籤
        theme: 'preferred-color-scheme', // 主題
      }
    }
  }
  ```

  ⚠ 此拓展為 Utterances 默認啟用了 `pathname` 映射方法。

  配置完成後，Utterances 既可使用，將顯示在文章末尾後。

</details>

## 介面組件

### 功能按鈕

<details>
  <summary>配置</summary>
  
  **⚠ 這些拓展尚未包含在 Urara 中，您需要手動下載組件。**

  #### 在使用前需下載組件：


  - **回復：[reply.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/reply.svelte) - <small>由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**

  - **分享：[share.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/share.svelte) - <small>由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**
  
  - **翻譯：[translate.svelte](https://github.com/importantimport/urara-docs/raw/master/public/extension/actions/translate.svelte) - <small>由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [./kwaa.dev](https://kwaa.dev/intro-urara)</small>**

  在上方下載需要的功能按鈕後，在 `src/lib/components/` 目錄下新建一個名為 `actions` 的文件夾，放入其中。

  #### 使用方法：

  當您完成以上設定後，功能按鈕已可用，需要注意：**此拓展僅在文章頁面寬度足够時才會顯示**。

  您還可以參考使用例源碼：[**blog/src/lib/components/actions at main · kwaa/blog**](https://github.com/kwaa/blog/tree/main/src/lib/components/actions)。

</details>

## 頁面拓展

### 友鏈

#### 由 [藍+85CD](https://github.com/kwaa) 製作 | 演示 - [./kwaa.dev](https://kwaa.dev/friends)

<details>
  <summary>配置</summary>
  
  **⚠ 此拓展尚未包含在 Urara 中，您需要手動下載組件。**

  1. 下載 [**friend.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/friend.svelte) 文件，放入 `src/lib/components/extra/` 目錄。

  2. 下載 [**+page.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/%2Bpage.svelte) 文件，在 `src/routes/` 目錄下新建一個名為 `friends` 的文件夾，放入其中。

  3. 下載 [**friends.ts**](https://github.com/importantimport/urara-docs/raw/master/public/extension/friend/friends.ts) 文件，放入 `src/lib/config/` 目錄。

  4. 安裝 `svelte-bricks` 依賴：

  ```bash
  pnpm add -D svelte-bricks
  ```

  #### 使用方法：

  `friends.ts` 中提供了默認樣式，可以自行替換：
  
  ```ts
  export const friends: Friend[] = [
    {
      id: 'id', // HTML ID
      rel: 'friend', // 連絡人類型：contact / acquaintance / friend
      name: 'Name', // 朋友昵稱
      title: 'Title', // 標題
      avatar: '/favicon.png', // 朋友圖片
      link: 'https://urara-demo.netlify.app/', // 連結
      descr: 'A Descriptions.', // 朋友描述
    }
  ]
  ```

  您還可以參考使用例源碼：[**blog/friends.ts at main · kwaa/blog**](https://github.com/kwaa/blog/blob/main/src/lib/config/friends.ts#L29)。

</details>

### 項目展示

#### 由 [SevicheCC](https://github.com/sevichecc) 製作 | 演示 - [Seviche.cc](https://seviche.cc/projects)

<details>
  <summary>配置</summary>
  
  **⚠ 此拓展尚未包含在 Urara 中，您需要手動下載組件。**

  1. 下載 [**projects.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/project/projects.svelte) 文件，放入 `src/lib/components/extra/` 目錄。

  2. 下載 [**+page.svelte**](https://github.com/importantimport/urara-docs/raw/master/public/extension/project/%2Bpage.svelte) 文件，在 `src/routes/` 目錄下新建一個名為 `projects` 的文件夾，放入其中。

  3. 下載 [**project.ts**](https://github.com/importantimport/urara-docs/raw/master/public/extension/project/project.ts) 文件，放入 `src/lib/config/` 目錄。

  #### 使用方法：

  `projects.ts` 中提供了默認樣式，可以自行替換：
  
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
      name: 'Urara', // 項目名
      tags: ['Svelte', 'TypeScript'], // 標籤
      description: // 描述
        "🌸 Sweet, Powerful, IndieWeb-Compatible SvelteKit Blog Starter. [δ](Delta)",
      feature: 'Svelte', // 特點
      img: 'https://github.com/importantimport/urara/raw/main/urara/hello-world/urara.webp',
      link: 'https://github.com/importantimport/urara'
    }
  ]
  ```

  您還可以參考使用例源碼：[**Urara-Blog/projects.ts at main · Sevichecc/Urara-Blog**](https://github.com/Sevichecc/Urara-Blog/blob/main/src/lib/config/projects.ts#L11)。

</details>
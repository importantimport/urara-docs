# 部署

## GitHub Pages

本項目配備了自動生成部署文件的 GitHub Actions 腳本，它會在您提交修改後運行再提交到 gh-pages 分支。

需要使用時，只需要設定 GitHub Pages 的部署分支為 gh-pages 既可。

> 如果您提交修改後 GitHub Actions 腳本沒有自動運行，請檢查您的倉庫是否存在多餘的其他分支，您也可以手動運行腳本。

## Netlify

本項目為 Netlify 配備了[**構建配置文件**](https://github.com/importantimport/urara/blob/main/netlify.toml)，當導入項目時，無需填寫構建設定。

若要在 Netlify 上部署本項目，您需要擁有一個 Netlify 帳號，並在需要的倉庫中安裝 [**Netlify app**](https://github.com/apps/netlify/installations/new) 後，既可訪問選中的倉庫。

接下來，只需要按照 [**Import an existing project**](https://app.netlify.com/start) 頁面繼續操作既可完成部署過程。

## Vercel

要在 Vercel 上部署本項目，您需要擁有一個 Vercel 帳號，就可以開始[**添加新項目**](https://vercel.com/new)。

您可以從公開 git 倉庫導入項目，若要導入 GitHub 私有倉庫，需關聯 GitHub 帳號進行授權。

選擇倉庫後，Vercel 會自動識別倉庫並選擇合適的架構，無需填寫構建與輸出設定。

您還可以根據需要添加其他設定，再進行部署，最後等待部署完成既可。

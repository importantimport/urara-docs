# 部署

## GitHub Pages

本项目配备了自动生成部署文件的 GitHub Actions 脚本，它会在您提交修改后运行再提交到 gh-pages 分支。

需要使用时，只需要设置 GitHub Pages 的部署分支为 gh-pages 既可。

> 如果您提交修改后 GitHub Actions 脚本没有自动运行，请检查您的仓库是否存在多余的其他分支，您也可以手动运行脚本。

## Netlify

本项目为 Netlify 配备了[**构建配置文件**](https://github.com/importantimport/urara/blob/main/netlify.toml)，当导入项目时，无需填写构建设置。

若要在 Netlify 上部署本项目，您需要拥有一个 Netlify 帐号，并在需要的仓库中安装 [**Netlify app**](https://github.com/apps/netlify/installations/new) 后，既可访问选中的仓库。

接下来，只需要按照 [**Import an existing project**](https://app.netlify.com/start) 页面继续操作既可完成部署过程。

## Vercel

要在 Vercel 上部署本项目，您需要拥有一个 Vercel 帐号，就可以开始[**添加新项目**](https://vercel.com/new)。

您可以从公开 git 仓库导入项目，若要导入 GitHub 私有仓库，需关联 GitHub 帐号进行授权。

选择仓库后，Vercel 会自动识别仓库并选择合适的架构，无需填写构建与输出设置。

您还可以根据需要添加其他设置，再进行部署，最后等待部署完成既可。

# 快速开始

## 分支

你可以在 GitHub 上使用此模板而无需下载到本地。

访问 [importantimport/urara](https://github.com/importantimport/urara) 仓库，并点击下面的 GitHub, Vercel 或 Netlify 部署按钮。

## 本地下载

### Node.js

在下载前你必须先检查你的电脑是否已经安装 Node.js。

```bash
node --version
```

如果你的电脑未安装 Node.js，则需要[下载并完成安装](https://nodejs.org/zh-cn/download)。

> 对于 Windows 用户：请确保勾选 **Add to PATH** 选项（默认已勾选）

### pnpm

本项目默认使用 [pnpm](https://pnpm.io/zh) 包管理器。

通过 npm 安装：

```bash
npm i -g pnpm
```

其他安装方式请参考[官方文档](https://pnpm.io/zh/installation)。

### degit

使用 `degit` 下载模板，并安装依赖包：

```bash
pnpm dlx degit importantimport/urara # 下载到当前目录
# 或者
pnpm dlx degit importantimport/urara my-blog && cd my-blog # 在当前目录新建 my-blog 文件夹并下载到里面，再切换到这个文件夹里

pnpm i # 安装依赖包
```

## 运行

### 开发

使用 `pnpm dev` 运行开发服务器：

```bash
pnpm dev # http://localhost:3000
pnpm dev -- --host 0.0.0.0 # http://0.0.0.0:3000
pnpm dev -- --host 0.0.0.0 --port 8080 # http://0.0.0.0:8080
```

### 部署

此模板默认使用 `adapter-auto`，当未检测到兼容环境时自动回退到 `adapter-static`。

使用 `pnpm build` 生成部署文件：

```bash
pnpm build
```

或强制使用特定的适配器：

```bash
VERCEL=true pnpm build # adapter-vercel
CF_PAGES=true # adapter-cloudflare-pages
NETLIFY=true pnpm build # adapter-netlify
```

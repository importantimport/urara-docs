# Quick Start

## Fork

You can use this template on GitHub without downloading it locally.

Visit the [**importantimport/urara**](https://github.com/importantimport/urara) repository and click the GitHub, Vercel, or Netlify deploy button below.

## Local Downloads

### Node.js

You must check that Node.js is installed on your computer before downloading.

```bash
node --version
```

If your computer does not have Node.js installed, you will need to [**download and complete the installation**](https://nodejs.org/zh-tw/download).

> For Windows users: make sure the **Add to PATH** option is checked (checked by default)

### pnpm

This item uses the [**pnpm**](https://pnpm.io/zh) package manager by default.

Installed via npm.

```bash
npm i -g pnpm
```

For other installation methods, please refer to the [**official documentation**](https://pnpm.io/zh/installation).

### degit

Use `degit` to download the template and install the dependency packages: 

```bash
pnpm dlx degit importantimport/urara # Download to the current directory
# or
pnpm dlx degit importantimport/urara my-blog && cd my-blog # Create a new my-blog in the current directory and download it to that folder, then go to

pnpm i # Install the dependency package
```

## Run

### Development

Use `pnpm dev` to run the development server.

```bash
pnpm dev # http://localhost:3000
pnpm dev -- --host 0.0.0.0 # http://0.0.0.0:3000
pnpm dev -- --host 0.0.0.0 --port 8080 # http://0.0.0.0:8080
```

### Deployment

This template uses `adapter-auto` by default and automatically falls back to `adapter-static` when no compatible environment is detected.

Use `pnpm build` to generate the deployment file.

```bash
pnpm build
```

or to force the use of a specific adapter.

```bash
VERCEL=true pnpm build # adapter-vercel
CF_PAGES=true # adapter-cloudflare-pages
NETLIFY=true pnpm build # adapter-netlify
```
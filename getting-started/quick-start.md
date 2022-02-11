# Quick Start

## Fork

You can use this template on GitHub without downloading it locally.

Visit the [importantimport/urara](https://github.com/importantimport/urara) repository and click the GitHub, Vercel, or Netlify deploy button below.

## Local Downloads

### Node.js

You must check that Node.js is installed on your computer before downloading.

```bash
node --version
```

If your computer does not have Node.js installed, you will need to [download and complete the installation](https://nodejs.org/zh-tw/download).

> For Windows users: make sure the **Add to PATH** option is checked (checked by default)

### pnpm

This item uses the [pnpm](https://pnpm.io/zh) package manager by default.

Installed via npx.

```bash
npx pnpm add -g pnpm
```

For other installation methods, please refer to the [official documentation](https://pnpm.io/zh/installation).

### @antfu/ni

This project suggests using [@antfu/ni](https://github.com/antfu/ni) to simplify the input of.

```bash
pnpm i -g @antfu/ni
```

If you do not use this tool, you will need to enter more characters. For example.

```bash
# nx degit importantimport/urara
pnpm dlx degit importantimport/urara

# nr dev --host 0.0.0.0 --port 3001
pnpm run dev -- --host 0.0.0.0 --port 3001

# nr build
pnpm run build

# nu
pnpm upgrade
```

### degit

Use ``degit`` to download the template and install the dependency packages: ``

```bash
nx degit importantimport/urara # Download to the current directory
# or
nx degit importantimport/urara my-blog && cd my-blog # Create a new my-blog in the current directory and download it to that folder, then go to

ni # Install the dependency package
```

## Run

### Development

Use `nr dev` to run the development server.

```bash
nr dev # http://localhost:3000
nr dev --host 0.0.0.0 # http://0.0.0.0:3000
nr dev --host 0.0.0.0 --port 8080 # http://0.0.0.0:8080
```

### Deployment

This template uses `adapter-auto` by default and automatically falls back to `adapter-static` when no compatible environment is detected.

Use ``nr build`` to generate the deployment file.

```bash
nr build
```

or to force the use of a specific adapter.

```bash
VERCEL=true nr build # adapter-vercel
CF_PAGES=true # adapter-cloudflare-pages
NETLIFY=true nr build # adapter-netlify
```
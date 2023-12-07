# Pinegrow Vite Tailwind CSS - Quick start template

This is a starter template that pre-includes [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin), [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) and other goodies for Pinegrow.

Demo - https://pg-vite-tailwindcss.netlify.app/

## Pinegrow

A desktop visual web editor for professionals supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Pinegrow](https://pinegrow.com)!

Pinegrow lets you work faster with HTML, CSS / SASS, Bootstrap, Tailwind CSS, GreenSock Interactions, WordPress and WooCommerce. Pinegrow is available as a desktop app and as a self-hosted WordPress plugin.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-vite-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-vite-tailwindcss my-vite-tailwindcss-app #project-name
cd my-vite-tailwindcss-app
npm install #or use pnpm
```

(or)

If you prefer a blank template (a single empty home page) instead,

```bash
npx giget@latest gh:pinegrow/pg-vite-tailwindcss#blank my-vite-tailwindcss-app #project-name
cd my-vite-tailwindcss-app
npm install #or use pnpm
```

## 2. Open in Pinegrow

Open your project in Pinegrow and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev
```

### Preview

```bash
npm run now # build & preview
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Build

```bash
npm run build
```

And you will see the generated file in `dist` that's ready to be served.

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-vite-tailwindcss)

Check out the [deployment documentation](https://vitejs.dev/guide/static-deploy.html#netlify) for more information.

## Pre-packed

### Framework / Build Tool

Vite is used in watch mode to treeshake, bundle, minify & optimize all ES modules, CSS, and other assets via the entry file `main.js`. The output is generated into the `dist` folder.

The bundled assets inside the dist folder, for example, `/dist/assets/css/output.css` and `/dist/main.js`, can be referenced in the HTML files via script and link tags.

See [Vite Configuration Reference](https://vitejs.dev/config/build-options.html#build-lib).

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss) - The amazing utility-first CSS framework.
- Wordpress - If using with Tailwind CSS with Wordpress, disable preflight in `tailwind.config.js` to avoid style conflicts. [Read more](https://css-tricks.com/adding-tailwind-css-to-wordpress-themes/)

```js
// tailwind.config.js
export default {
  corePlugins: {
    preflight: false,
  },
  // ...
  // rest of the config
}
```

### Modules/Plugins

- [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) - enables connection and interaction between your Dev-Server and Pinegrow.
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `jsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Pinegrow Community](https://forum.pinegrow.com/)

import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { safelist } from './src/utils/index.js'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  safelist,

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  content: [
    './index.html',
    './src/**/*.{html,vue,svelte,astro,js,cjs,ts,cts,mts,jsx,tsx,md,mdx}',
    './_pginfo/**/*.{html,js}',
  ],
  // get content() {
  //   const _content = [
  //     './index.html',
  //     './pages/**/*.{html,vue,svelte,astro,js,cjs,ts,cts,mts,jsx,tsx,md,mdx}',
  //   ]
  //   return process.env.NODE_ENV === 'production'
  //     ? _content
  //     : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  // },
}

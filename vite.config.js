//vite.config.js (or) vite.config.ts

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { liveDesigner } from '@pinegrow/vite-plugin'

// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    liveDesigner({
      dirs: {
        src: './src',
        pages: './pages',
      },
      output: {
        cssDir: './css', // Relative to outDir (default is 'dist')
        cssFilename: 'style.css',
        cssWpFilename: 'style.wp.css',
        jsDir: './js', // Relative to outDir (default is 'dist')
        imgDir: './images', // Relative to outDir (default is 'dist')
      },
      pagesWithEntries: [
        {
          page: './index.html',
          entry: './src/main.js',
        },
        {
          page: './pages/blog.html',
          entry: './src/main.js',
        },
      ],
    }),
    //...
  ],

  build: {
    // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
    rollupOptions: {
      plugins: [
        /*visualizer()*/
      ],
    },
  },
  resolve: {
    alias: {
      /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
      /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  //...
})

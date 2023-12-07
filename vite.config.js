//vite.config.js (or) vite.config.ts

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { liveDesigner } from '@pinegrow/vite-plugin'

// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    liveDesigner({
      //...
      iconPreferredCase: 'iconify', // "iconify-icon" uses the iconify format
      tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    }),
    //...
  ],
  mode: 'development',
  // base: '/dist',
  define: {
    'process.env': process.env,
  },
  server: {
    // open: '/index.html',
    // port: '5174',
    // hmr: false
  },
  build: {
    // minify: 'esbuild', // ['esbuild' (default), 'terser', true, false]
    cssMinify: false, // ['esbuild' (default is same as minify), 'lightningcss', true, false]
    // sourcemap: false, // [false (default), true]
    outDir: 'dist',
    // IMPORTANT: Set to false; otherwise, Pinegrow watchers will cease tracking changes to the individual CSS outputs, preventing automatic style updates to the HTML pages.
    emptyOutDir: false, // [true (default), false]
    // https://vitejs.dev/config/build-options.html#build-lib
    lib: {
      // entry file that has es modules & the tailwind.css that contains the tailwind directives
      entry: './src/main.js',
      // // Can specify multiple entries. Note: When multiple entries are used, remove 'umd' and 'iife' from output formats below
      // entry: {
      // 	main: './src/main.js',
      // 	another: './src/another.js'
      // },
      name: 'MyLib',
      // fileName: '[name]',
      // fileName: (format, entryAlias) => `${entryAlias}.${format}.js`,
      fileName: (format, entryAlias) => `${entryAlias}.js`,
      formats: ['iife'], // can be ['es', 'cjs', 'umd', 'iife'], // defaults to ['es', 'umd'], and ['es', 'cjs'] when multiple entries are used.
    },

    // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
    rollupOptions: {
      plugins: [
        /*visualizer()*/
      ],
      output: {
        // Just a simple function to get the css file generated as output.css under dist/assets/css folder. And all the images under dist/assets/img folder.
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          if (extType === 'css') {
            return `assets/${extType}/output[extname]`
          } else if (extType === 'img') {
            return `assets/${extType}/[name]-[hash][extname]`
          }
        },
      },
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

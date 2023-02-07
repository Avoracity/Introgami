const { join } = require('path')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
      server: {
        static: {
          '/client/assets/images': {
            root: join(__dirname, 'client/assets/images')
          }
        }
      },

        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { title: 'Introgami'},
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        // Global favicon and font 
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: "stylesheet",
            href: "https://use.typekit.net/rvc4bpb.css",
          },
          { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.14.0/css/all.css' }
        ]
    
    
      },
    
      // Global CSS: https://go.nuxtjs.dev/config-css
      css: [
        'vue-style-loader',
        { src: '~/assets/styles/global.css', lang: 'css' },
        
      ],
      // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
      plugins: [
       
      ],

    
      // Auto import components: https://go.nuxtjs.dev/config-components
      components: true,
    
      // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
      buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
      ],
    
      // Modules: https://go.nuxtjs.dev/config-modules
      modules: [
        '@nuxtjs/tailwindcss'
      ],

      
    
      // Build Configuration: https://go.nuxtjs.dev/config-build
      build: {
        postcss: {
          plugins: {
            'postcss-import': {},
            'postcss-preset-env': {},
          }
        }
      }
})


const URL_API_GATEWAY = process.env.URL_API_GATEWAY

export default {
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap',
        crossorigin: 'anonymous'
      }
    ]
  },

  loading: { color: '#fff' },

  css: ['normalize.css/normalize.css', '@/assets/css/tailwind.css'],

  plugins: [
    '@/plugins/accessor',
    // '@/plugins/notifications.client',
    '@/plugins/axios',
    '@/plugins/lodash',
    '@/plugins/mercado-pago',
    { src: '@/plugins/x5-gmaps', mode: 'client' },
    { src: '@/plugins/x5-gmaps', mode: 'client' },
    { src: '@/plugins/vee-validate', mode: 'client' },
    { src: '@/plugins/vue-carousel', mode: 'client' },
    { src: '@/plugins/vue-screen', mode: 'client' },
    { src: '@/plugins/vue-scrollto', mode: 'client' }
  ],
  components: [{ path: '@/components/', pathPrefix: false }],
  screen: {
    extend: 'tailwind'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxt/postcss8
    '@nuxt/postcss8'
  ],

  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt', 'vue-screen/nuxt'],

  // URL BASE DA API:
  axios: {
    // proxyHeaders: false,
    // credentials: false,
    baseURL: URL_API_GATEWAY
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: true,
    cssSourceMap: false,
    html: { minify: { collapseWhitespace: true } },
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}

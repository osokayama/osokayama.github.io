require('dotenv').config()

export default {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s :: オープンセミナー2023@岡山',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:title', content: 'オープンセミナー2023@岡山' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://okayama.open-seminar.org/' },
      { property: 'og:image', content: 'https://okayama.open-seminar.org/images/ogp_image.png' },
      { property: 'og:site_name', content: 'オープンセミナー2023@岡山' },
      { property: 'og:description', content: 'オープンセミナー2023@岡山公式ページ。オープンセミナーはソフトウェア技術をテーマにした無料セミナーです。' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@os_okayama' },
      { property: 'twitter:creator', content: '@os_okayama' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/siimple@3.0.0/dist/siimple.min.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css', integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
  },
  generate: {
    subFolders : false
  },
  router: {
    base: process.env.BASE_DIR || '/',
    extendRoutes(routes, resolve) {
      const aliases = routes.map(route => ({
        path     : /\/$/.test(route.path) ? `${route.path}index.html` : `${route.path}.html`,
        alias    : route.path,
        component: route.component
      }))
      routes.push(...aliases)
    }
  },
  hooks: {
    generate: {
      async extendRoutes(routes) {
        const filtered = routes.filter(page => !/\.html$/.test(page.route))
        routes.splice(0, routes.length, ...filtered)
      }
    }
  }
}

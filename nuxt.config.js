module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'percycle-intranet',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: [
        'assets/css/fonts.css',
        'assets/scss/bootstrap-custom.scss',
    ],
    /*
    ** Customize the progress bar color
    */
    // loading: { color: '#3B8070' },
    loading: false,
    /*
    ** Build configuration
    */
    build: {
    /*
    ** Run ESLint on save
    */
        extend (config, { isDev, isClient }) {
            const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');

            vueLoader.options.transformToRequire = {
                'img': 'src',
                'image': 'xlink:href',
                'b-img': 'src',
                'b-img-lazy': ['src', 'blank-src'],
                'b-card': 'img-src',
                'b-card-img': 'img-src',
                'b-carousel-slide': 'img-src',
                'b-embed': 'src'
            };

            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
    },
    modules: [],
    plugins: [
        'plugins/fontawesome.js' ,
        'plugins/bootstrap-vue.js',
        'plugins/format-money-filter.js',
        { src: 'plugins/vue-select', ssr:  false },
    ],
    vendors: ['vue-select'],
};

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 400);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth"
          });
        } else {
          return window.scrollTo(150, el.offsetTop);
        }
      }

      return {
        x: 0,
        y: 0
      };
    }
  },
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    titleTemplate: 'Juwelier Melis | Ihr Juwelier in Bad Säckingen',
    title: 'Juwelier Melis | Ihr Juwelier in Bad Säckingen',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'juwelier, juwelier melis, juwelier Bad Säckingen, goldschmuck, reparaturen, goldankauf, goldverkauf, Trauringe Bad Säckingen, Uhren Bad Säckingen'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Juwelier Melis - Goldankauf, Schmuckverkauf, Reparaturen. Ihr Juwelier in Bad Säckingen'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Amir Ćišija - amircisija.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Juwelier Melis | Ihr Juwelier in Bad Säckingen'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Juwelier Melis - Goldankauf, Schmuckverkauf, Reparaturen. Ihr Juwelier in Bad Säckingen'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    'aos/dist/aos.css',
    '~/assets/style/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
    src: '@/plugins/aos.js',
    ssr: false
  }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['bootstrap-vue/nuxt', {
      icons: true,
    }],

    // ...other modules
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}

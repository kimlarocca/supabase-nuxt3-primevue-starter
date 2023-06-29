// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#f4f2f0' },
        { name: 'theme-color', content: '#f4f2f0' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff3904' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        }
      ]
    },
  },
  modules: ['@nuxtjs/supabase'],
  supabase: {
    url: process.env.NUXT_ENV_SUPABASE_URL,
    key: process.env.NUXT_ENV_SUPABASE_KEY,
    redirect: true,
  },
  css: [
		'primevue/resources/themes/mdc-light-deeppurple/theme.css',
    'primevue/resources/primevue.min.css',
		'primeicons/primeicons.css',
		'primeflex/primeflex.css',
		'@/assets/styles/main.scss',
	],
  components: true,
	build: {
		transpile: ['primevue'],
	},
  runtimeConfig: {
    public: {
      environment: process.env.environment || 'demo',
      supabaseUrl: process.env.NUXT_ENV_SUPABASE_URL,
      supabaseKey: process.env.NUXT_ENV_SUPABASE_KEY,
      supabaseAuthSignInRedirectTo: process.env.NUXT_ENV_SUPABASE_AUTH_SIGN_IN_REDIRECT_TO,
      supabaseAuthTokenName: process.env.NUXT_ENV_SUPABASE_AUTH_TOKEN_NAME,
    }
  },
})
export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@vueuse/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  runtimeConfig: {
    session: {
      name: "gss.auth",
      password: process.env.NUXT_SESSION_PASSWORD || '',
      maxAge: 60 * 60 * 24 * 30,
      cookie: {
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
      }
    },

    public: {
      title: 'Site'
    }
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  hub: {
    database: true,
    blob: true,
    kv: true,
    cache: true,
    analytics: true,
    browser: true
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500],
      styles: ['normal'],
      subsets: [
        'latin'
      ]
    }
  },

  nitro: {
      experimental: {
          openAPI: true,
          tasks: true
      },

      imports: {
        presets: [{ from: "consola", imports: ["consola"]}]
      },
  },
  
  imports: {
    presets: [{ from: "consola", imports: ["consola"]}]
  },

  icon: {
    clientBundle: {
      scan: true
    }
  },

})
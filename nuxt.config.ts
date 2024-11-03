// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    process.env.NODE_ENV === 'production' ? '@nuxthub/core' : undefined,
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    'nuxt-content-twoslash',
    '@nuxt/content',
    'radix-vue/nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    'nuxt-typed-router',
    'nuxt-link-checker',
    '@vueuse/nuxt',
    'nuxt-time',
    '@nuxthq/studio'
  ],
  components: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '•'
      },
      htmlAttrs: {
        lang: 'en',
        class: 'h-full'
      },
      bodyAttrs: {
        class: 'antialiased min-h-screen bg-neutral-1 dark:bg-neutral-dark-1'
      }
    }
  },
  css: ['~/styles.scss'],
  site: {
    url: 'https://tasky.nuxt.dev',
    name: 'tasky',
    description: 'tasky\'s site',
    author: 'tasky',
    defaultLocale: 'en'
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark',
        light: 'github-light',
        dark: 'github-dark'
      },
      langs: [
        'js',
        'ts',
        'javascript',
        'typescript',
        'html',
        'vue',
        'scss',
        'markdown',
        'md',
        'json',
        'bash',
        'yaml',
        'yml',
        'diff',
        'tsx'
      ]
    }
  },
  future: {
    compatibilityVersion: 4
  },
  experimental: {
    typedPages: true,
    buildCache: true
  },
  compatibilityDate: '2024-04-03',
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler'
        }
      }
    }
  },
  telemetry: { enabled: false },
  eslint: {
    config: {
      tooling: true,
      stylistic: {
        semi: false,
        commaDangle: 'never'
      }
    }
  },
  icon: {
    serverBundle: false
  },
  twoslash: {
    floatingVueOptions: {
      classMarkdown: 'prose prose-primary dark:prose-invert'
    }
  }
})

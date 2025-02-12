// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxthub/core',
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
    '@nuxthq/studio',
    'nuxt-server-fn'
  ],
  components: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '•'
      },
      htmlAttrs: {
        lang: 'en',
        class: 'h-full'
      }
    }
  },
  css: ['@unocss/reset/tailwind.css', '~/styles.scss'],
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
  hub: {
    database: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  telemetry: { enabled: false },
  eslint: {
    config: {
      standalone: false,
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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  telemetry: { enabled: false },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  experimental: { buildCache: true },
  modules: [
    '@nuxthub/core',
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
    '@nuxthq/studio',
  ],
  css: ['~/styles.scss'],
  components: true,
  eslint: {
    config: {
      stylistic: {
        semi: false,
      },
    },
  },
  colorMode: {
    classSuffix: '',
  },
  site: {
    url: 'https://tasky.nuxt.dev',
    name: 'tasky',
    description: 'tasky\'s site',
    author: 'tasky',
    defaultLocale: 'en',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '•',
      },
      htmlAttrs: {
        lang: 'en',
        class: 'h-full',
      },
      bodyAttrs: {
        class: 'antialiased min-h-screen bg-neutral-1 dark:bg-neutral-dark-1',
      },
    },
  },
  twoslash: {
    floatingVueOptions: {
      classMarkdown: 'prose prose-primary dark:prose-invert',
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark',
        light: 'github-light',
        dark: 'github-dark',
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
        'tsx',
      ],
    },
  },
  icon: {
    serverBundle: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler',
        },
      },
    },
  },
})

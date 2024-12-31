// @ts-check
// @ts-expect-error
import tailwind from 'eslint-plugin-tailwindcss'
import format from 'eslint-plugin-format'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/vue/rules', {
    rules: {
      'vue/no-v-html': 'error',
      'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],

      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style']
        }
      ]
    }
  })
  .removeRules('vue/multi-word-component-names')
  .override('tailwindcss:rules', {
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: ['header-anchor', 'custom-block-title', 'content']
        }
      ],
      'tailwindcss/classnames-order': ['warn'],
      'tailwindcss/enforces-negative-arbitrary-values': ['warn'],
      'tailwindcss/enforces-shorthand': ['error'],
      'tailwindcss/no-contradicting-classname': ['error'],
      'tailwindcss/no-unnecessary-arbitrary-value': ['error']
    }
  })
  .append(...tailwind.configs['flat/recommended'], {
    files: ['**/*.css', '**/*.scss'],
    languageOptions: {
      parser: format.parserPlain
    },
    plugins: {
      format
    },
    rules: {
      'format/prettier': ['error', { parser: 'css', tabWidth: 2 }]
    }
  })

// @ts-check
// @ts-expect-error
import tailwind from 'eslint-plugin-tailwindcss'
import format from 'eslint-plugin-format'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/vue/rules', {
    rules: {
      'vue/no-v-html': 'error',
      'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }]
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
      ]
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

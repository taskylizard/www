import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .removeRules(
    'vue/multi-word-component-names',
    'vue/first-attribute-linebreak',
  )
  .append(...tailwind.configs['flat/recommended'])
  .override('tailwindcss:rules', {
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: ['header-anchor', 'custom-block-title', 'content'],
        },
      ],
    },
  })

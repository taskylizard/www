import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import colorx, { gray, blue, yellow, red, pink, sky, slate, olive, indigo, crimson, amber, green } from './config/colorx'

// Define typography tokens mapping
const proseTokens = {
  'body': 'neutral-11',
  'headings': 'neutral-12',
  'lead': 'neutral-11',
  'links': 'pink-11',
  'bold': 'neutral-12',
  'counters': 'neutral-11',
  'bullets': 'neutral-12',
  'hr': 'neutral-6',
  'quotes': 'neutral-12',
  'quote-borders': 'neutral-6',
  'captions': 'neutral-11',
  'code': 'neutral-12',
  'pre-code': 'neutral-12',
  'pre-bg': 'neutral-3',
  'th-borders': 'neutral-7',
  'td-borders': 'neutral-6'
} as const

const radix = colorx({
  gray,
  blue,
  yellow,
  red,
  pink,
  sky,
  slate,
  olive,
  indigo,
  crimson,
  amber,
  green
})
  .alias({
    neutral: 'gray',
    primary: 'pink',
    info: 'blue',
    tip: 'green',
    warning: 'yellow',
    danger: 'red',
    details: 'gray'
  })
  .build({ selector: 'class' })

// Generate prose styles using CSS variables
const proseStyles = {
  'h1, h2, h3, h4, h5, h6': {
    color: `rgb(var(--${proseTokens.headings}))`
  },
  'lead': {
    color: `rgb(var(--${proseTokens.lead}))`
  },
  'a': {
    color: `rgb(var(--${proseTokens.links}))`,
    textDecoration: 'underline'
  },
  'bold': {
    color: `rgb(var(--${proseTokens.bold}))`
  },
  'counters': {
    color: `rgb(var(--${proseTokens.counters}))`
  },
  'bullets': {
    color: `rgb(var(--${proseTokens.bullets}))`
  },
  'hr': {
    borderColor: `rgb(var(--${proseTokens.hr}))`
  },
  'quotes': {
    color: `rgb(var(--${proseTokens.quotes}))`
  },
  'quote-borders': {
    borderLeftColor: `rgb(var(--${proseTokens['quote-borders']}))`
  },
  'captions': {
    color: `rgb(var(--${proseTokens.captions}))`
  },
  'code': {
    color: `rgb(var(--${proseTokens.code}))`
  },
  'pre': {
    backgroundColor: `rgb(var(--${proseTokens['pre-bg']}))`
  },
  'pre code': {
    color: `rgb(var(--${proseTokens['pre-code']}))`
  },
  'th': {
    borderBottomColor: `rgb(var(--${proseTokens['th-borders']}))`
  },
  'td': {
    borderBottomColor: `rgb(var(--${proseTokens['td-borders']}))`
  }
}

export default defineConfig({
  theme: { colors: { transparent: 'transparent', current: 'currentColor', ...radix.colors } },
  preflights: [radix.preflight],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      autoInstall: true
    }),
    presetTypography({
      cssExtend: proseStyles
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter Variable',
        mono: 'Geist Mono',
        pacifico: {
          name: 'Pacifico',
          weights: [400],
          italic: true
        }
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})

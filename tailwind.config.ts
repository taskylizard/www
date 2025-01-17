import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import * as radixColors from '@radix-ui/colors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colors: any = {}

Object.entries(radixColors).forEach(([key, value]) => {
  const [baseColor, ...prefixes] = key
    .split(/(?=[A-Z])/)
    .map(word => word.toLowerCase())
  colors[baseColor] ??= {}
  Object.entries(value).forEach(([colorKey, colorValue]) => {
    colors[baseColor][[...prefixes, colorKey.replace(/\D+/, '')].join('-')]
      = colorValue
  })
})

const brand = 'violet' as const

const gray = (
  {
    tomato: 'mauve',
    red: 'mauve',
    crimson: 'mauve',
    pink: 'mauve',
    plum: 'mauve',
    purple: 'mauve',
    violet: 'mauve',

    indigo: 'slate',
    blue: 'slate',
    sky: 'slate',
    cyan: 'slate',

    teal: 'sage',
    mint: 'sage',
    green: 'sage',

    grass: 'olive',
    lime: 'olive',

    yellow: 'sand',
    amber: 'sand',
    orange: 'sand',
    brown: 'sand'
  } as const
)[brand]

colors.primary = colors[brand]
colors.neutral = colors[gray]
colors.white.DEFAULT = 'white'
colors.black.DEFAULT = 'black'

const prose = {
  'body': '11',
  'headings': '12',
  'lead': '11',
  'links': 'pink.11',
  'bold': '12',
  'counters': '11',
  'bullets': '12',
  'hr': '6',
  'quotes': '12',
  'quote-borders': '6',
  'captions': '11',
  'code': '12',
  'pre-code': '12',
  'pre-bg': '3',
  'th-borders': '7',
  'td-borders': '6'
}

function getProse(theme: (key: string) => string) {
  const res = {}
  Object.keys(prose).forEach((key) => {
    const value = `colors.${prose[key].replace(/^\d/, 'gray.$&')}`
    res[`--tw-prose-${key}`] = theme(value)
    res[`--tw-prose-invert-${key}`] = theme(value.replace(/\d+$/, 'dark-$&'))
  })
  return res
}

export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    colors,
    extend: {
      fontFamily: {
        mono: ['Geist Mono', 'Geist Mono fallback', ...fontFamily.mono]
      },
      typography: ({ theme }) => ({ DEFAULT: { css: getProse(theme) } })
    }
  },
  plugins: [typography]
} satisfies Config

/* [
  'amber',  'black',  'blue',
  'bronze', 'brown',  'crimson',
  'cyan',   'gold',   'grass',
  'gray',   'green',  'indigo',
  'lime',   'mauve',  'mint',
  'olive',  'orange', 'pink',
  'plum',   'purple', 'red',
  'sage',   'sand',   'sky',
  'slate',  'teal',   'tomato',
  'violet', 'white',  'yellow'
] */

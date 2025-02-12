import {
  amberA as amberALight,
  amberDark,
  amberDarkA,
  amber as amberLight,
  blueA as blueALight,
  blueDark,
  blueDarkA,
  blue as blueLight,
  bronzeA as bronzeALight,
  bronzeDark,
  bronzeDarkA,
  bronze as bronzeLight,
  brownA as brownALight,
  brownDark,
  brownDarkA,
  brown as brownLight,
  crimsonA as crimsonALight,
  crimsonDark,
  crimsonDarkA,
  crimson as crimsonLight,
  cyanA as cyanALight,
  cyanDark,
  cyanDarkA,
  cyan as cyanLight,
  goldA as goldALight,
  goldDark,
  goldDarkA,
  // metals
  gold as goldLight,
  grassA as grassALight,
  grassDark,
  grassDarkA,
  grass as grassLight,
  // Alpha colors
  grayA as grayALight,
  grayDark,
  grayDarkA,
  // grays
  gray as grayLight,
  greenA as greenALight,
  greenDark,
  greenDarkA,
  green as greenLight,
  indigoA as indigoALight,
  indigoDark,
  indigoDarkA,
  indigo as indigoLight,
  irisA as irisALight,
  irisDark,
  irisDarkA,
  iris as irisLight,
  jadeA as jadeALight,
  jadeDark,
  jadeDarkA,
  jade as jadeLight,
  limeA as limeALight,
  limeDark,
  limeDarkA,
  lime as limeLight,
  mauveA as mauveALight,
  mauveDark,
  mauveDarkA,
  mauve as mauveLight,
  mintA as mintALight,
  mintDark,
  mintDarkA,
  mint as mintLight,
  oliveA as oliveALight,
  oliveDark,
  oliveDarkA,
  olive as oliveLight,
  orangeA as orangeALight,
  orangeDark,
  orangeDarkA,
  orange as orangeLight,
  pinkA as pinkALight,
  pinkDark,
  pinkDarkA,
  pink as pinkLight,
  plumA as plumALight,
  plumDark,
  plumDarkA,
  plum as plumLight,
  purpleA as purpleALight,
  purpleDark,
  purpleDarkA,
  purple as purpleLight,
  redA as redALight,
  redDark,
  redDarkA,
  red as redLight,
  rubyA as rubyALight,
  rubyDark,
  rubyDarkA,
  ruby as rubyLight,
  sageA as sageALight,
  sageDark,
  sageDarkA,
  sage as sageLight,
  sandA as sandALight,
  sandDark,
  sandDarkA,
  sand as sandLight,
  skyA as skyALight,
  skyDark,
  skyDarkA,
  // bright colors
  sky as skyLight,
  slateA as slateALight,
  slateDark,
  slateDarkA,
  slate as slateLight,
  tealA as tealALight,
  tealDark,
  tealDarkA,
  teal as tealLight,
  tomatoA as tomatoALight,
  tomatoDark,
  tomatoDarkA,
  // colors
  tomato as tomatoLight,
  violetA as violetALight,
  violetDark,
  violetDarkA,
  violet as violetLight,
  yellowA as yellowALight,
  yellowDark,
  yellowDarkA,
  yellow as yellowLight,
} from '@radix-ui/colors'

type Shade = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

type CustomShadeCSSVaraible<T extends string> = `--${T}-${Shade}`
type CustomColorObject<T extends string> = {
  [key in CustomShadeCSSVaraible<T>]: string;
}

type RadixShadeVariable<T extends string> = `${T}${Shade}`
type RadixColorObject<T extends string> = {
  [key in RadixShadeVariable<T>]: string;
}

type ColorValue<T extends string> = [
  {
    [key in RadixShadeVariable<T>]: string;
  },
  {
    [key in RadixShadeVariable<T>]: string;
  }
]

type Color<K extends string> = {
  [key in K]: ColorValue<key>;
}

type Alias<K extends string, T extends string> = {
  [key in K]?: T | T[];
}

type ColorsResult<N extends string> = Record<N, Record<Shade, string>>
type ColorsOverlayResult = Record<'black' | 'white', Record<'DEFAULT' | Shade, string>>

export type { Shade }
export type { CustomColorObject, RadixColorObject }
export type { ColorValue }
export type { Alias, Color }
export type { ColorsOverlayResult, ColorsResult }

// colors

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#tomato
 */
export const tomato: ColorValue<'tomato'> = [tomatoLight, tomatoDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#red
 */
export const red: ColorValue<'red'> = [redLight, redDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#ruby
 */
export const ruby: ColorValue<'ruby'> = [rubyLight, rubyDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#crimson
 */
export const crimson: ColorValue<'crimson'> = [crimsonLight, crimsonDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#pink
 */
export const pink: ColorValue<'pink'> = [pinkLight, pinkDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#plum
 */
export const plum: ColorValue<'plum'> = [plumLight, plumDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#purple
 */
export const purple: ColorValue<'purple'> = [purpleLight, purpleDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#violet
 */
export const violet: ColorValue<'violet'> = [violetLight, violetDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#iris
 */
export const iris: ColorValue<'iris'> = [irisLight, irisDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#indigo
 */
export const indigo: ColorValue<'indigo'> = [indigoLight, indigoDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#blue
 */
export const blue: ColorValue<'blue'> = [blueLight, blueDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#cyan
 */
export const cyan: ColorValue<'cyan'> = [cyanLight, cyanDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#teal
 */
export const teal: ColorValue<'teal'> = [tealLight, tealDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#jade
 */
export const jade: ColorValue<'jade'> = [jadeLight, jadeDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#green
 */
export const green: ColorValue<'green'> = [greenLight, greenDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#grass
 */
export const grass: ColorValue<'grass'> = [grassLight, grassDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#orange
 */
export const orange: ColorValue<'orange'> = [orangeLight, orangeDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#brown
 */
export const brown: ColorValue<'brown'> = [brownLight, brownDark]

// bright colors

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#sky
 */
export const sky: ColorValue<'sky'> = [skyLight, skyDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#mint
 */
export const mint: ColorValue<'mint'> = [mintLight, mintDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#lime
 */
export const lime: ColorValue<'lime'> = [limeLight, limeDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#yellow
 */
export const yellow: ColorValue<'yellow'> = [yellowLight, yellowDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#amber
 */
export const amber: ColorValue<'amber'> = [amberLight, amberDark]

// grays

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#gray
 */
export const gray: ColorValue<'gray'> = [grayLight, grayDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#mauve
 */
export const mauve: ColorValue<'mauve'> = [mauveLight, mauveDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#slate
 */
export const slate: ColorValue<'slate'> = [slateLight, slateDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#sage
 */
export const sage: ColorValue<'sage'> = [sageLight, sageDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#olive
 */
export const olive: ColorValue<'olive'> = [oliveLight, oliveDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#sand
 */
export const sand: ColorValue<'sand'> = [sandLight, sandDark]

// metals

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#gold
 */
export const gold: ColorValue<'gold'> = [goldLight, goldDark]

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#bronze
 */
export const bronze: ColorValue<'bronze'> = [bronzeLight, bronzeDark]

/** Alpha colors */
export const grayA: ColorValue<'grayA'> = [grayALight, grayDarkA]
export const mauveA: ColorValue<'mauveA'> = [mauveALight, mauveDarkA]
export const slateA: ColorValue<'slateA'> = [slateALight, slateDarkA]
export const sageA: ColorValue<'sageA'> = [sageALight, sageDarkA]
export const oliveA: ColorValue<'oliveA'> = [oliveALight, oliveDarkA]
export const sandA: ColorValue<'sandA'> = [sandALight, sandDarkA]
export const tomatoA: ColorValue<'tomatoA'> = [tomatoALight, tomatoDarkA]
export const redA: ColorValue<'redA'> = [redALight, redDarkA]
export const rubyA: ColorValue<'rubyA'> = [rubyALight, rubyDarkA]
export const crimsonA: ColorValue<'crimsonA'> = [crimsonALight, crimsonDarkA]
export const pinkA: ColorValue<'pinkA'> = [pinkALight, pinkDarkA]
export const plumA: ColorValue<'plumA'> = [plumALight, plumDarkA]
export const purpleA: ColorValue<'purpleA'> = [purpleALight, purpleDarkA]
export const violetA: ColorValue<'violetA'> = [violetALight, violetDarkA]
export const irisA: ColorValue<'irisA'> = [irisALight, irisDarkA]
export const indigoA: ColorValue<'indigoA'> = [indigoALight, indigoDarkA]
export const blueA: ColorValue<'blueA'> = [blueALight, blueDarkA]
export const cyanA: ColorValue<'cyanA'> = [cyanALight, cyanDarkA]
export const tealA: ColorValue<'tealA'> = [tealALight, tealDarkA]
export const jadeA: ColorValue<'jadeA'> = [jadeALight, jadeDarkA]
export const greenA: ColorValue<'greenA'> = [greenALight, greenDarkA]
export const grassA: ColorValue<'grassA'> = [grassALight, grassDarkA]
export const orangeA: ColorValue<'orangeA'> = [orangeALight, orangeDarkA]
export const brownA: ColorValue<'brownA'> = [brownALight, brownDarkA]
export const skyA: ColorValue<'skyA'> = [skyALight, skyDarkA]
export const mintA: ColorValue<'mintA'> = [mintALight, mintDarkA]
export const limeA: ColorValue<'limeA'> = [limeALight, limeDarkA]
export const yellowA: ColorValue<'yellowA'> = [yellowALight, yellowDarkA]
export const amberA: ColorValue<'amberA'> = [amberALight, amberDarkA]
export const goldA: ColorValue<'goldA'> = [goldALight, goldDarkA]
export const bronzeA: ColorValue<'bronzeA'> = [bronzeALight, bronzeDarkA]

/**
 *
 * rename color variable
 *
 * ```css
 * :root {
 *    --gray-1: 252 252 252;
 *    --gray-2: 249 249 249;
 *    --gray-3: 240 240 240;
 *    --etc: etc;
 * }
 *
 * :root {
 *    --custom-gray-1: 252 252 252;
 *    --custom-gray-2: 249 249 249;
 *    --custom-gray-3: 240 240 240;
 *    --etc: etc;
 * }
 * ```
 *
 */
export function rename<K extends string>(color: Color<K>) {
  return {
    to: <V extends string>(next: Readonly<{ [key in K]: V }>) => {
      return Object.entries(color).reduce((obj, [key, value]) => {
        obj[next[key as K]] = (value as ColorValue<string>).map((mode) => {
          return Object.entries(mode).reduce((_mode, [, value], index) => {
            _mode[`${next[key as K]}${index + 1}`] = value
            return _mode
          }, {} as Record<string, string>)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as any
        return obj
      }, {} as Color<V>)
    },
  }
}

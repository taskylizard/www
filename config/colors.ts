import {
  // colors
  tomato as tomatoLight,
  tomatoDark,
  red as redLight,
  redDark,
  ruby as rubyLight,
  rubyDark,
  crimson as crimsonLight,
  crimsonDark,
  pink as pinkLight,
  pinkDark,
  plum as plumLight,
  plumDark,
  purple as purpleLight,
  purpleDark,
  violet as violetLight,
  violetDark,
  iris as irisLight,
  irisDark,
  indigo as indigoLight,
  indigoDark,
  blue as blueLight,
  blueDark,
  cyan as cyanLight,
  cyanDark,
  teal as tealLight,
  tealDark,
  jade as jadeLight,
  jadeDark,
  green as greenLight,
  greenDark,
  grass as grassLight,
  grassDark,
  orange as orangeLight,
  orangeDark,
  brown as brownLight,
  brownDark,
  // bright colors
  sky as skyLight,
  skyDark,
  mint as mintLight,
  mintDark,
  lime as limeLight,
  limeDark,
  yellow as yellowLight,
  yellowDark,
  amber as amberLight,
  amberDark,
  // grays
  gray as grayLight,
  grayDark,
  mauve as mauveLight,
  mauveDark,
  slate as slateLight,
  slateDark,
  sage as sageLight,
  sageDark,
  olive as oliveLight,
  oliveDark,
  sand as sandLight,
  sandDark,
  // metals
  gold as goldLight,
  goldDark,
  bronze as bronzeLight,
  bronzeDark,
  // Alpha colors
  grayA as grayALight,
  grayDarkA,
  mauveA as mauveALight,
  mauveDarkA,
  slateA as slateALight,
  slateDarkA,
  sageA as sageALight,
  sageDarkA,
  oliveA as oliveALight,
  oliveDarkA,
  sandA as sandALight,
  sandDarkA,
  tomatoA as tomatoALight,
  tomatoDarkA,
  redA as redALight,
  redDarkA,
  rubyA as rubyALight,
  rubyDarkA,
  crimsonA as crimsonALight,
  crimsonDarkA,
  pinkA as pinkALight,
  pinkDarkA,
  plumA as plumALight,
  plumDarkA,
  purpleA as purpleALight,
  purpleDarkA,
  violetA as violetALight,
  violetDarkA,
  irisA as irisALight,
  irisDarkA,
  indigoA as indigoALight,
  indigoDarkA,
  blueA as blueALight,
  blueDarkA,
  cyanA as cyanALight,
  cyanDarkA,
  tealA as tealALight,
  tealDarkA,
  jadeA as jadeALight,
  jadeDarkA,
  greenA as greenALight,
  greenDarkA,
  grassA as grassALight,
  grassDarkA,
  orangeA as orangeALight,
  orangeDarkA,
  brownA as brownALight,
  brownDarkA,
  skyA as skyALight,
  skyDarkA,
  mintA as mintALight,
  mintDarkA,
  limeA as limeALight,
  limeDarkA,
  yellowA as yellowALight,
  yellowDarkA,
  amberA as amberALight,
  amberDarkA,
  goldA as goldALight,
  goldDarkA,
  bronzeA as bronzeALight,
  bronzeDarkA
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
export type { Color, Alias }
export type { ColorsResult, ColorsOverlayResult }

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
export const rename = <K extends string>(color: Color<K>) => {
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
    }
  }
}

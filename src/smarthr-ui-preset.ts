import { darken } from 'polished'
import plugin from 'tailwindcss/plugin'

import { defaultColor } from './themes/createColor'
import { defaultFontSize, defaultHtmlFontSize } from './themes/createFontSize'
import { defaultShadow } from './themes/createShadow'
import { createSpacingByChar, primitiveTokens as spacingSizes } from './themes/createSpacing'
import { defaultZIndex } from './themes/createZIndex'

import type { Config } from 'tailwindcss'

const spacingByChar = createSpacingByChar(defaultHtmlFontSize / 2)
type Spacing = {
  [key in (typeof spacingSizes)[number]]: string
}
const darkenColor = (color: string, amount: number = 0.05) => darken(amount, color)

// この preset を各プロダクトでも読み込んでもらう想定
export default {
  content: [],
  theme: {
    backgroundColor: ({ theme }) => ({
      black: defaultColor.GREY_100,
      white: defaultColor.WHITE,
      'white-darken': theme('colors.white-darken'),
      link: defaultColor.TEXT_LINK,
      background: defaultColor.BACKGROUND,
      column: defaultColor.COLUMN,
      'base-grey': defaultColor.BASE_GREY,
      'over-background': defaultColor.OVER_BACKGROUND,
      head: defaultColor.HEAD,
      'action-background': defaultColor.ACTION_BACKGROUND,
      main: defaultColor.MAIN,
      'main-darken': theme('colors.main-darken'),
      danger: defaultColor.DANGER,
      'danger-darken': theme('colors.danger-darken'),
      'warning-yellow': defaultColor.WARNING_YELLOW,
      overlay: defaultColor.OVERLAY,
      scrim: defaultColor.SCRIM,
      inherit: 'inherit',
      transparent: 'transparent',
    }),
    borderRadius: {
      none: '0',
      s: '0.25rem',
      m: '0.375rem',
      l: '0.5rem',
      full: '9999px',
    },
    boxShadow: {
      'layer-0': defaultShadow.LAYER0,
      'layer-1': defaultShadow.LAYER1,
      'layer-2': defaultShadow.LAYER2,
      'layer-3': defaultShadow.LAYER3,
      'layer-4': defaultShadow.LAYER4,
      outline: defaultShadow.OUTLINE,
      underline: defaultShadow.UNDERLINE,
      none: 'none',
    },
    colors: {
      black: defaultColor.GREY_100,
      white: defaultColor.WHITE,
      'white-darken': darkenColor(defaultColor.WHITE),
      main: defaultColor.MAIN,
      'main-darken': darkenColor(defaultColor.MAIN),
      brand: defaultColor.BRAND,
      outline: defaultColor.OUTLINE,
      danger: defaultColor.DANGER,
      'danger-darken': darkenColor(defaultColor.DANGER),
      grey: {
        DEFAULT: defaultColor.GREY_65,
        5: defaultColor.GREY_5,
        6: defaultColor.GREY_6,
        7: defaultColor.GREY_7,
        9: defaultColor.GREY_9,
        20: defaultColor.GREY_20,
        30: defaultColor.GREY_30,
        65: defaultColor.GREY_65,
        100: defaultColor.GREY_100,
      },
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      inherit: 'inherit',
    },
    fontSize: {
      '2xs': defaultFontSize.XXS,
      xs: defaultFontSize.XS,
      sm: defaultFontSize.S,
      base: defaultFontSize.M,
      lg: defaultFontSize.L,
      xl: defaultFontSize.XL,
      '2xl': defaultFontSize.XXL,
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      loose: '1.75',
    },
    maxWidth: {
      none: 'none',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    outlineColor: {
      DEFAULT: defaultColor.OUTLINE,
    },
    spacing: {
      px: '1px',
      em: '1em',
      ...(spacingSizes
        .map((size) => ({
          [size]: spacingByChar(size),
        }))
        .reduce((a, c) => Object.assign(a, c), {}) as Spacing),
    },
    stroke: {
      black: defaultColor.GREY_100,
    },
    textColor: ({ theme }) => ({
      black: theme('colors.black'),
      white: theme('colors.white'),
      'white-darken': theme('colors.white-darken'),
      disabled: theme('colors.grey.30'),
      link: defaultColor.TEXT_LINK,
      grey: theme('colors.grey.65'),
      inherit: 'inherit',
      transparent: 'transparent',
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      'fixed-menu': `${defaultZIndex.FIXED_MENU}`,
      'overlap-base': `${defaultZIndex.OVERLAP_BASE}`,
      overlap: `${defaultZIndex.OVERLAP}`,
      'flash-message': `${defaultZIndex.FLASH_MESSAGE}`,
    },
    extend: {
      borderColor: ({ theme }) => ({
        default: theme('colors.grey.20'),
        disabled: theme('colors.grey.20/50'),
        darken: darkenColor(theme('colors.grey.20')),
        highContrast: theme('colors.grey.100'),
      }),
    },
  },
  corePlugins: {
    preflight: false,
    boxShadowColor: false,
    caretColor: false,
    divideColor: false,
    placeholderColor: false,
    ringColor: false,
    ringOffsetColor: false,
    textDecorationColor: false,
  },
  plugins: [
    plugin(({ addUtilities, addComponents, theme }) => {
      addUtilities({
        '.overflow-inherit': { overflow: 'inherit' },
        '.overflow-initial': { overflow: 'initial' },
        '.overflow-revert': { overflow: 'revert' },
        '.overflow-unset': { overflow: 'unset' },
        '.overflow-x-inherit': { 'overflow-x': 'inherit' },
        '.overflow-y-inherit': { 'overflow-y': 'inherit' },
        '.overflow-x-initial': { 'overflow-x': 'initial' },
        '.overflow-y-initial': { 'overflow-y': 'initial' },
        '.overflow-x-revert': { 'overflow-x': 'revert' },
        '.overflow-y-revert': { 'overflow-y': 'revert' },
        '.overflow-x-unset': { 'overflow-x': 'unset' },
        '.overflow-y-unset': { 'overflow-y': 'unset' },
      })
      addComponents({
        /**
         * box-shadow や ring を使った仕組みでは Firefoxx で欠陥があるため、独自定義している
         * via https://github.com/tailwindlabs/tailwindcss/issues/10226
         */
        '.focusIndicator': {
          outline: 'none',
          isolation: 'isolate',
          boxShadow: `0 0 0 2px ${theme('colors.white')}, 0 0 0 4px ${theme('colors.outline')}`,
        },
      })
    }),
  ],
  prefix: 'shr-',
} satisfies Config
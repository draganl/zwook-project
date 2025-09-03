const baseColors = {
  brandBlue: '#2970FF',
  brandBlueHover: '#155EEF',
  brandBlueFocus: '#0040C1',
  brandBlueActive: '#002266',

  darkText: '#0D121C',
  darkBackground: '#252A33',

  lightBackground: '#FCFCFD',
  lightText: '#EEF2F6',

  warning: '#EFCC44',
  error: '#F04438',
  errorHover: '#D92D20',
  errorFocus: '#912018',
  errorActive: '#7A271A',

  success: '#17B26A',
  successHover: '#079455',
  successFocus: '#085D3A',
  successActive: '#074D31',

  neutralLight: '#FCFCFD',
  neutralDark: '#CDD5DF',
  neutralPlaceholderLight: '#697586',
  neutralPlaceholderDark: '#9AA3B2',
  neutralSecondaryLight: '#EEF2F6',
  neutralSecondaryDark: '#202939',

  invertLight: '#F8FAFC',
  invertDark: '#121926',
};
const pxToRem = (px) => `${px / 16}rem`;
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-2xl': [pxToRem(72), { lineHeight: pxToRem(90) }],
        'display-xl': [pxToRem(60), { lineHeight: pxToRem(72) }],
        'display-lg': [pxToRem(48), { lineHeight: pxToRem(60) }],
        'display-md': [pxToRem(36), { lineHeight: pxToRem(44) }],
        'display-sm': [pxToRem(30), { lineHeight: pxToRem(40) }],
        'text-xl': [pxToRem(24), { lineHeight: pxToRem(36) }],
        'text-l': [pxToRem(20), { lineHeight: pxToRem(32) }],
        'text-lg': [pxToRem(18), { lineHeight: pxToRem(28) }],
        'text-md': [pxToRem(16), { lineHeight: pxToRem(24) }],
        'text-sm': [pxToRem(14), { lineHeight: pxToRem(20) }],
        'text-xs': [pxToRem(12), { lineHeight: pxToRem(16) }],
        'text-xxs': [pxToRem(10), { lineHeight: pxToRem(12) }],
      },
      colors: {
        // Shared base colors for referencing
        base: baseColors,

        // Light mode colors
        text: {
          primary: baseColors.darkText,
          secondary: baseColors.neutralDark,
          brand: baseColors.brandBlue,
          invert: baseColors.invertLight,
          warning: baseColors.warning,
          error: baseColors.error,
          success: baseColors.success,
          primaryPlaceholder: baseColors.neutralPlaceholderLight,
          neutral: baseColors.neutralLight,
          dark: baseColors.darkText,
        },
        surface: {
          primary: baseColors.lightBackground,
          invert: baseColors.darkBackground,
          brand: baseColors.brandBlue,
          error: baseColors.error,
          warning: baseColors.warning,
          success: baseColors.success,
          secondary: baseColors.neutralSecondaryLight,
          primaryActive: baseColors.neutralSecondaryLight,
          brandHover: baseColors.brandBlueHover,
          brandFocused: baseColors.brandBlueFocus,
          errorHover: baseColors.errorHover,
          errorFocused: baseColors.errorFocus,
          successHover: baseColors.successHover,
          successFocused: baseColors.successFocus,
          brandActive: baseColors.lightText,
          errorActive: baseColors.errorActive,
          successActive: baseColors.successActive,
          neutral: baseColors.neutralLight,
          warningLight: '#FEF6C6',
        },
        border: {
          primary: baseColors.neutralDark,
          brand: baseColors.brandBlue,
          error: baseColors.error,
          primaryLight: baseColors.neutralSecondaryLight,
          primaryLighter: baseColors.lightText,
        },
        background: {
          primary: baseColors.lightText,
          secondary: baseColors.neutralLight,
        },

        // Dark mode overrides
        dark: {
          text: {
            primary: baseColors.lightText,
            secondary: baseColors.neutralDark,
            brand: '#528BFF', // Slightly lighter brand blue for dark mode text
            invert: baseColors.invertDark,
            warning: baseColors.warning,
            error: baseColors.error,
            success: baseColors.success,
            primaryPlaceholder: baseColors.neutralPlaceholderDark,
            neutral: baseColors.neutralLight,
            dark: baseColors.darkText,
          },
          surface: {
            primary: baseColors.darkBackground,
            invert: baseColors.lightBackground,
            brand: baseColors.brandBlueHover,
            error: baseColors.error,
            warning: baseColors.warning,
            success: baseColors.success,
            secondary: baseColors.neutralSecondaryDark,
            primaryActive: '#3D4149',
            brandHover: baseColors.brandBlueHover,
            brandFocused: baseColors.brandBlueFocus,
            errorHover: baseColors.errorHover,
            errorFocused: baseColors.errorFocus,
            successHover: baseColors.successHover,
            successFocused: baseColors.successFocus,
            brandActive: baseColors.brandBlueActive,
            errorActive: baseColors.errorActive,
            successActive: baseColors.successActive,
            neutral: baseColors.neutralLight,
            warningLight: '#FEF6C6',
          },
          border: {
            primary: '#4A4D55',
            brand: baseColors.brandBlue,
            error: baseColors.error,
            primaryLight: baseColors.neutralDark,
            primaryLighter: '#364152',
          },
          background: {
            primary: baseColors.darkText,
            secondary: baseColors.darkBackground,
          },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
    },
  },
};


const colors = {
  greyWeb: '#7a7d7d',
  raisinBlack: '#2a2829',
  brightNavyBlue: '#0c77d4',
  carolinaBlue: '#479eeb',
  congoPink: '#f1746e',

  white: '#fafafa',
  lightGrey: '#d0cfcf',
  grey: '#868383',
  darkGrey: '#343232',
  black: '#1e1e1e',

  success: '#50b990',
  warning: '#f0b800',
  error: '#c93434',
};

const modes = {
  light: {
    primary: colors.white,
    onPrimary: colors.black,
    secondary: colors.raisinBlack,
    onSecondary: colors.lightGrey,
    accent: colors.brightNavyBlue,
    onAccent: colors.white,
    accentHover: colors.carolinaBlue,
    onAccentHover: colors.white,

    white: colors.white,
    lightGrey: colors.lightGrey,
    grey: colors.grey,
    darkGrey: colors.darkGrey,
    black: colors.black,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  },

  dark: {
    primary: colors.raisinBlack,
    onPrimary: colors.white,
    secondary: colors.black,
    onSecondary: colors.lightGrey,
    accent: colors.brightNavyBlue,
    onAccent: colors.darkGrey,
    accentHover: colors.carolinaBlue,
    onAccentHover: colors.darkGrey,

    white: colors.white,
    lightGrey: colors.lightGrey,
    grey: colors.grey,
    darkGrey: colors.darkGrey,
    black: colors.black,

    success: colors.success,
    warning: colors.warning,
    error: colors.congoPink,
  },
};

const theme = { colors, modes };

export { theme };
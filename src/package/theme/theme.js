
const colors = {
  greyWeb: '#7a7d7d',
  lightGrey: '#d0cfcf',
  raisinBlack: '#2a2829',
  pacificBlue: '#45a7ba',
  darkSkyBlue: '#8bbbc5',

  white: '#fafafa',
  grey: '#757575',
  lightGrey: '#c5c5c5',
  black: '#1d1d1d',
  transparent: 'transparent',

  success: '#50b990',
  warning: '#f0b800',
  error: '#c93434',
  info: '#0d97ff',
};

const modes = {
  light: {
    primary: colors.white,
    onPrimary: colors.greyWeb,
    secondary: colors.raisinBlack,
    onSecondary: colors.lightGrey,
    accent: colors.pacificBlue,
    onAccent: colors.black,
    accentHover: colors.darkSkyBlue,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },

  dark: {
    primary: colors.raisinBlack,
    onPrimary: colors.white,
    secondary: colors.lightGrey,
    onSecondary: colors.greyWeb,
    accent: colors.pacificBlue,
    onAccent: colors.black,
    accentHover: colors.darkSkyBlue,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },
};

const theme = { colors, modes };

export { theme };
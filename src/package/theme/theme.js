
const colors = {
  greyWeb: '#7a7d7d',
  lightGrey: '#d0cfcf',
  eerieBlack: '#1f1e1f',
  bittersweet: '#f96c62',
  congoPink: '#fb9089',
  pacificBlue: '#45a7ba',
  darkSkyBlue: '#8bbbc5',

  white: '#fafafa',
  grey: '#757575',
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
    secondary: colors.eerieBlack,
    onSecondary: colors.lightGrey,
    accent: colors.bittersweet,
    onAccent: colors.black,
    accentHover: colors.congoPink,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },

  dark: {
    primary: colors.eerieBlack,
    onPrimary: colors.white,
    secondary: colors.lightGrey,
    onSecondary: colors.greyWeb,
    accent: colors.bittersweet,
    onAccent: colors.black,
    accentHover: colors.congoPink,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
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
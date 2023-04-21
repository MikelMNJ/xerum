import _ from 'lodash';

const { VITE_APP_NAME } = process.env;

const appConstants = {
  themes: {
    light: 'light',
    dark: 'dark',
  },

  messageTypes: {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
    loading: 'loading',
  },

  appName: _.camelCase(VITE_APP_NAME),
  textWidth: 32,
  layoutWidth: 112,
};

export { appConstants };
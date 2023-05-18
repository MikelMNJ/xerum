import { appConstants } from 'modules';

const { selectors } = appConstants;

const appSelectors = {
  selectedTheme: state => state.app[selectors.STATE_KEY_SELECTED_THEME],
  bannerContent: state => state.app[selectors.STATE_KEY_BANNER_CONTENT],
  notifications: state => state.app[selectors.STATE_KEY_NOTIFICATIONS],
  modalContent: state => state.app[selectors.STATE_KEY_MODAL_CONTENT],
  confirmContent: state => state.app[selectors.STATE_KEY_CONFIRM_CONTENT],
  expense: state => state.app[selectors.STATE_KEY_EXPENSE],
};

export { appSelectors };
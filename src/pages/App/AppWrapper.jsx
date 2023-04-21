import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { App } from 'pages';
import { appSelectors, appActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    modalContent: appSelectors.modalContent(state),
    confirmContent: appSelectors.confirmContent(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setTheme: payload => dispatch(appActions.setTheme(payload)),
    setModalContent: payload => dispatch(appActions.setModalContent(payload)),
    setConfirmContent: payload => dispatch(appActions.setConfirmContent(payload)),
  };
};

const Component = withTheme(App);
const AppWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { AppWrapper };
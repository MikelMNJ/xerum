import { connect } from 'react-redux';
import { Main } from 'pages';
import { withTheme } from 'styled-components';
import { appSelectors, appActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setTheme: payload => dispatch(appActions.setTheme(payload)),
  };
};

const Component = withTheme(Main);
const MainWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { MainWrapper };
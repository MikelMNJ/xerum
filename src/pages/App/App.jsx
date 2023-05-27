
import { Fragment } from 'react';
import { Routes } from 'react-router-dom';
import { appConstants } from 'modules';
import { makeRoutes, getColor } from 'helpers';
import { GlobalStyles, StyledApp, MainContent } from './styles';
import { Font, Notifications, Loading, Modal } from 'components';
import _ from 'lodash';

const App = props => {
  const {
    theme,
    selectedTheme,
    userInfo,
    userInfoLoading,
    modalContent,
    setModalContent,
    confirmContent,
    setConfirmContent,
    ...rest
  } = props;
  const lightTheme = props.selectedTheme === appConstants.themes.light;
  const token = userInfo?.token;

  const colorOverride = lightTheme
    ? props.theme.modes[props.selectedTheme].accent
    : props.theme.modes[props.selectedTheme].onPrimary;

  const renderApp = () => {
    return (
      <StyledApp>
        <MainContent>
          <Routes>
            {makeRoutes(token)}
          </Routes>
        </MainContent>
      </StyledApp>
    );
  };

  return (
    <Fragment>
      <GlobalStyles $theme={theme} $selectedTheme={selectedTheme} {...rest} />
      <Notifications $theme={theme} $selectedTheme={selectedTheme} {...rest} />

      <Loading
        isLoading={userInfoLoading}
        hasData={userInfo}
        iconColor={colorOverride}
        textColor={colorOverride}
        text={<Font size={1.125} weight='semibold'>Authenticating...</Font>}
        renderOnFail={true}
      >
        {renderApp()}

        <Modal
          $theme={theme}
          $selectedTheme={selectedTheme}
          visible={!_.isEmpty(modalContent)}
          onClose={() => setModalContent(null)}
          {...rest}
        >
          {modalContent}
        </Modal>

        <Modal
          $theme={theme}
          $selectedTheme={selectedTheme}
          confirm={true}
          confirmText={<Font weight='semibold'>{confirmContent?.confirmText || 'Confirm'}</Font>}
          cancelText={<Font weight='semibold'>Cancel</Font>}
          confirmButtonTextColor={getColor(props, 'primary')}
          confirmButtonColor={getColor(props, 'accent')}
          confirmButtonHoverColor={getColor(props, 'accentHover')}
          cancelButtonColor={getColor(props, 'onPrimary')}
          cancelButtonHoverColor={getColor(props, 'onPrimary')}
          visible={!_.isEmpty(confirmContent)}
          onConfirm={confirmContent?.onConfirm}
          onClose={() => setConfirmContent(null)}
          {...rest}
        >
          {confirmContent?.content}
        </Modal>
      </Loading>
    </Fragment>
  );
};

export { App };
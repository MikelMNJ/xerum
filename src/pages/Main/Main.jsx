import { useState } from 'react';
import { StyledMain, ContentArea } from './styles';
import { appConstants } from 'modules';
import { Button, Spacer, Font, Modal } from 'components';
import { TestForm } from './TestForm';
import _ from 'lodash';

const { themes } = appConstants;
const { light, dark } = themes;

const Main = props => {
  const { theme, selectedTheme, setTheme } = props;
  const [ confirmContent, setConfirmContent ] = useState(null);
  const lightTheme = props.selectedTheme === 'light';

  const handleThemeChange = () => {
    setTheme(lightTheme ? dark : light);
  };

  return (
    <StyledMain>
      <ContentArea>
        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          icon={`fa-solid fa-${lightTheme ? 'sun' : 'moon'}`}
          noText={true}
          buttonType='transparent'
          callback={handleThemeChange}
        />

        <Spacer />

        <Modal
          theme={theme}
          selectedTheme={selectedTheme}
          confirm={true}
          confirmText={<Font weight='medium' mobileSize={0.875}>Confirm</Font>}
          cancelText={<Font weight='medium' mobileSize={0.875}>Cancel</Font>}
          onClose={() => setConfirmContent(null)}
          onConfirm={_.noop}
          visible={!_.isEmpty(confirmContent)}
          useOverflow={true}
          mobileMode={true}
          bgClose={true}
          blank={true}
          privacy={false}
        >
          {confirmContent}
        </Modal>

        <Spacer />

        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          type='button'
          text={<Font weight='medium'>Normal</Font>}
          callback={() => setConfirmContent(<TestForm />)}
        />

        <Spacer />

        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          type='button'
          text={<Font weight='medium'>More Fields</Font>}
          callback={() => setConfirmContent(<TestForm moreFields={true} />)}
        />
      </ContentArea>
    </StyledMain>
  );
};

export { Main };
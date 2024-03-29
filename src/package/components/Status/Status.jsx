import React, { Fragment } from 'react';
import { Spacer } from '../Spacer/Spacer';
import { StyledStatus } from './styles';

const Status = props => {
  const { theme, selectedTheme, color, text } = props;

  return (
    <StyledStatus $theme={theme} $selectedTheme={selectedTheme} $color={color}>
      <i className='fa-solid fa-circle' />

      {text && (
        <Fragment>
          <Spacer across={true} />
          {text}
        </Fragment>
      )}
    </StyledStatus>
  );
};

export { Status };
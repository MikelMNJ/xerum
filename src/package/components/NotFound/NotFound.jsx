import React from 'react';
import { iconValid } from '../../helpers';
import { StyledNotFound, Icon, P } from './styles';
import { Spacer } from '../Spacer/Spacer';

const NotFound = props => {
  const {
    theme,
    selectedTheme,
    color,
    title,
    noTitle,
    icon,
    noIcon,
    message,
    noMessage,
  } = props;

  const renderIcon = () => {
    if (!noIcon) {
      return (
        <Icon $theme={theme} $selectedTheme={selectedTheme} $color={color}>
          <i className={`${icon ? iconValid(icon) : 'fa-solid fa-bug'}`} />
        </Icon>
      );
    }
  };

  const renderTitle = () => {
    if (!noTitle) {
      return title || '404: Hrmm...';
    }
  };

  const renderMessage = () => {
    if (!noMessage) {
      return (
        <P>
          {message || 'Unable to find that page.'}
        </P>
      );
    }
  };

  return (
    <StyledNotFound>
      {renderIcon()}

      <Spacer />

      {renderTitle()}
      {renderMessage()}
    </StyledNotFound>
  );
};

export { NotFound };
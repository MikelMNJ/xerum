import React from 'react';
import { iconValid } from '../../helpers';
import { StyledNotFound, Icon, H2, P } from './styles';

const NotFound = props => {
  const {
    theme,
    selectedTheme,
    title,
    noTitle,
    icon,
    noIcon,
    message,
    noMessage,
    staticContext,
    ...rest
  } = props;

  const renderIcon = () => {
    if (!noIcon) {
      return (
        <Icon className='icon'>
          <i className={`${icon ? iconValid(icon) : 'fa-solid fa-bug'}`} />
        </Icon>
      );
    }
  };

  const renderTitle = () => {
    if (!noTitle) {
      return (
        <H2>
          {title || '404: Hrmm...'}
        </H2>
      );
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
    <StyledNotFound theme={theme} selectedTheme={selectedTheme} {...rest}>
      {renderIcon()}
      {renderTitle()}
      {renderMessage()}
    </StyledNotFound>
  );
};

export { NotFound };
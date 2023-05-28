import React, { forwardRef } from 'react';
import { iconValid } from '../../helpers';
import { StyledNotification, Icon, StyledMessage, Close } from './styles';
import _ from 'lodash';

const defaultIcon = 'fa-solid fa-info-circle';
const defaultSuccess = 'fa-solid fa-check';
const defaultWarning = 'fa-solid fa-triangle-exclamation';
const defaultError = 'fa-solid fa-circle-exclamation';

const Message = forwardRef((props, ref) => {
  const {
    theme,
    selectedTheme,
    message,
    noIcons,
    onClose,
    textColor,
    borderColor,
    bgColor,
  } = props;

  const buildMessage = () => {
    if (_.isObject(message) && !_.isArray(message)) {
      return message.message || message.msg;
    }

    return message;
  };

  const getDefaultIcon = () => {
    switch (_.lowerCase(message.type)) {
      case 'success':
        return defaultSuccess;
      case 'warning':
        return defaultWarning;
      case 'error':
        return defaultError;

      default:
        return defaultIcon;
    }
  };

  return (
    <StyledNotification
      ref={ref}
      $theme={theme}
      $selectedTheme={selectedTheme}
      $noIcons={noIcons}
      $type={_.lowerCase(message.type)}
      $textColor={textColor}
      $borderColor={borderColor}
      $bgColor={bgColor}
    >
      {!noIcons && (
        <Icon>
          <i className={iconValid(message.icon) || getDefaultIcon()} />
        </Icon>
      )}

      <StyledMessage>
        {buildMessage()}
      </StyledMessage>

      <Close onClick={onClose}>
        <i className='fa-solid fa-times' />
      </Close>
    </StyledNotification>
  );
});

export { Message };
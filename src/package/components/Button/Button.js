import React from 'react';
import { iconValid, urlValid } from '../../helpers';
import { StyledButton } from './styles';

const Button = props => {
  const {
    text,
    btnType,
    icon,
    url,
    passthrough,
    callback,
    children,
    ...rest
  } = props;

  const handleClick = e => {
    const validUrl = urlValid(url);

    if (rest.type === 'submit') e.preventDefault();
    if (passthrough) e.stopPropagation();
    if (validUrl) window.open(validUrl, rest.target || '_blank');

    callback?.();
  };

  return (
    <StyledButton btnType={btnType} onClick={handleClick} {...rest}>
      {iconValid(icon) && (
        <>
          <i className={icon} />&nbsp;
        </>
      )}

      {text || children || (rest.type === 'submit' && 'Submit') || 'Button'}
    </StyledButton>
  );
};

export { Button };
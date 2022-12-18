import React from 'react';
import { iconValid, urlValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledButton } from './styles';

const Button = props => {
  const {
    text,
    btnType,
    icon,
    iconRight,
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

  const buildContent = () => {
    const validLeft = icon && !iconRight && iconValid(icon);
    const validRight = icon && iconRight && iconValid(icon);

    return (
      <>
        {validLeft && <i className={icon} />}
        {validLeft && <Spacer size={0.5} across={true} />}
        {text || children || (rest.type === 'submit' && 'Submit') || 'Button'}
        {validRight && <Spacer size={0.5} across={true} />}
        {validRight && <i className={icon} />}
      </>
    );
  };

  return (
    <StyledButton btnType={btnType} onClick={handleClick} {...rest}>
      {buildContent()}
    </StyledButton>
  );
};

export { Button };
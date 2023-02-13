import React from 'react';
import { iconValid, urlValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledButton } from './styles';

const Button = props => {
  const {
    text,
    noText,
    color,
    hoverColor,
    textColor,
    buttonType,
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
        {!noText && validLeft && <Spacer size={1} across={true} />}
        {!noText && (text || children || (rest.type === 'submit' && 'Submit'))}
        {!noText && validRight && <Spacer size={1} across={true} />}
        {validRight && <i className={icon} />}
      </>
    );
  };

  return (
    <StyledButton
      buttonType={buttonType}
      noText={noText}
      onClick={handleClick}
      color={color}
      hoverColor={hoverColor}
      textColor={textColor}
      {...rest}
    >
      {buildContent()}
    </StyledButton>
  );
};

export { Button };
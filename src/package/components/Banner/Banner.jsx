import React from 'react';
import { iconValid } from '../../helpers';
import { StyledBanner, Message, Close } from './styles';

const Banner = props => {
  const {
    theme,
    selectedTheme,
    text,
    visible,
    noClose,
    closeIcon,
    callback,
    center,
    sharp,
    textColor,
    bgColor,
    padding,
    position,
    height,
    top,
    bottom,
    zIndex,
    children,
  } = props;

  return (
    <StyledBanner
      $theme={theme}
      $selectedTheme={selectedTheme}
      $noClose={noClose}
      $sharp={sharp}
      $textcolor={textColor}
      $bgcolor={bgColor}
      $padding={padding}
      $position={position}
      $height={height}
      $top={top}
      $bottom={bottom}
      $zindex={zIndex}
      $visible={visible}
    >
      <Message $center={center}>
        {text || children}
      </Message>

      {!noClose && (
        <Close>
          <i
            role='none'
            className={iconValid(closeIcon) || 'fa-solid fa-times'}
            onKeyUp={e => e.key === 'Enter' && callback?.()}
            onClick={callback}
          />
        </Close>
      )}
    </StyledBanner>
  );
};

export { Banner };
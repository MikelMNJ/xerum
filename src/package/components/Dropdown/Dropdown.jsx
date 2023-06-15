import React, { useEffect, useRef, useState } from 'react';
import { StyledDropdown } from './styles';

const Dropdown = props => {
  const {
    theme,
    selectedTheme,
    visible,
    setVisible,
    width,
    posX,
    posY,
    zIndex,
    borderSize,
    borderRadius,
    borderColor,
    horizontalPadding,
    verticalPadding,
    padding,
    bgColor,
    color,
    shadowColor,
    minHeight,
    maxHeight,
    isMobile,
    children,
  } = props;
  const [ readyToClose, setReadyToClose ] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = e => {
      const outsideClick = !dropdownRef.current?.contains(e.target);
      if (outsideClick) setVisible(false);
    };

    if (visible) setReadyToClose(true);

    if (visible && readyToClose) {
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        setReadyToClose(false);
      };
    }
  }, [ visible, setVisible, readyToClose, setReadyToClose ]);

  return (
    <StyledDropdown
      ref={dropdownRef}
      $theme={theme}
      $selectedTheme={selectedTheme}
      $visible={visible}
      $width={width}
      $posX={posX}
      $posY={posY}
      $zIndex={zIndex}
      $borderSize={borderSize}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      $padding={padding}
      $horizontalPadding={horizontalPadding}
      $verticalPadding={verticalPadding}
      $bgColor={bgColor}
      $color={color}
      $shadowColor={shadowColor}
      $minHeight={minHeight}
      $maxHeight={maxHeight}
      $isMobile={isMobile}
    >
      {children}
    </StyledDropdown>
  );
};

export { Dropdown };
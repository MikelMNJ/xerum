import React, { useRef, useEffect, useState } from 'react';
import { iconValid } from '../../helpers';
import { StyledBadge, CountWrapper, Counter, IconWrapper } from './styles';

const Badge = props => {
  const {
    theme,
    selectedTheme,
    textColor,
    textSize,
    bgColor,
    count,
    icon,
    iconColor,
    iconHoverColor,
    iconSize,
    strokeColor,
    strokeWidth,
    position,
    posX,
    posY,
    callback,
    ...rest
  } = props;

  const [ widths, setWidths ] = useState({ countWidth: 0, iconWidth: 0 });

  const countWrapperRef = useRef();
  const iconWrapperRef = useRef();

  useEffect(() => {
    const refsReady = countWrapperRef.current && iconWrapperRef.current;

    if (refsReady) {
      const countWidth = countWrapperRef.current.offsetWidth;
      const iconWidth = iconWrapperRef.current.offsetWidth;

      setWidths({ countWidth, iconWidth });
    }
  }, [ countWrapperRef, iconWrapperRef, setWidths ]);

  const renderCount = () => {
    if (count > 0) {
      return (
        <Counter theme={theme} selectedTheme={selectedTheme} count={count}>
          {count.toLocaleString()}
        </Counter>
    );}
  };

  return (
    <StyledBadge onClick={() => callback?.()}>
      <CountWrapper
        ref={countWrapperRef}
        theme={theme}
        selectedTheme={selectedTheme}
        textSize={textSize}
        textColor={textColor}
        bgColor={bgColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        widths={widths}
        position={position}
        posX={posX}
        posY={posY}
        {...rest}
      >
        {renderCount()}

      </CountWrapper>

      <IconWrapper
        ref={iconWrapperRef}
        theme={theme}
        selectedTheme={selectedTheme}
        iconColor={iconColor}
        iconHoverColor={iconHoverColor}
        iconSize={iconSize}
      >
        <i className={iconValid(icon) || 'fa-solid fa-bell'} />
      </IconWrapper>
    </StyledBadge>
  );
};

export { Badge };
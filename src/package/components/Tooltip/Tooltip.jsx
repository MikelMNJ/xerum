import React, { useCallback, useState, useRef, useEffect } from 'react';
import { iconValid } from '../../helpers';
import { StyledTooltip, Tip } from './styles';

const offset = 12;

const Tooltip = props => {
  const {
    theme,
    selectedTheme,
    iconColor,
    textColor,
    bgColor,
    borderSize,
    borderColor,
    icon,
    text,
    position,
    children,
    ...rest
  } = props;

  const [ showTip, setShowTip ] = useState(false);
  const [ coords, setCoords ] = useState(null);
  const [ tipPosition, setTipPosition ] = useState(null);

  const tipRef = useRef();

  const getStyle = useCallback(() => {
    const target = tipRef.current;

    if (target && coords) {
      const width = target.clientWidth;
      const height = target.clientHeight;

      switch(position) {
        case 'top':
          return {
            top: coords.y - height - offset,
            left: coords.x - (width / 2),
          };

        case 'right':
          return {
            top: coords.y - (height / 2),
            left: coords.x + offset,
          };

        case 'bottom':
          return {
            top: coords.y + offset,
            left: coords.x - (width / 2),
          };

        case 'left':
          return {
            top: coords.y - (height / 2),
            left: coords.x - width - offset,
          };

        default:
          return {
            top: coords.y + offset,
            left: coords.x + offset,
          };
      }
    }
  }, [ coords, position ]);

  useEffect(() => {
    if (coords) setTipPosition(getStyle());
  }, [ coords, setTipPosition, getStyle ]);

  const updatePos = e => {
    const x = e.clientX;
    const y = e.clientY;
    setCoords({ x, y });
  };

  const renderTip = () => {
    if (showTip && coords) {
      return (
        <Tip
          ref={tipRef}
          theme={theme}
          selectedTheme={selectedTheme}
          tipPosition={tipPosition}
          bgColor={bgColor}
          textColor={textColor}
          borderSize={borderSize}
          borderColor={borderColor}
        >
          {text || children || 'Missing tip text.'}
        </Tip>
      );
    }
  };

  return (
    <StyledTooltip
      theme={theme}
      selectedTheme={selectedTheme}
      iconColor={iconColor}
      onMouseOut={() => setShowTip(false)}
      onMouseMove={updatePos}
      onMouseOver={e => {
        updatePos(e);
        setShowTip(true);
      }}
      {...rest}
    >
      <i className={iconValid(icon) || 'fa-solid fa-info-circle'} />
      {renderTip()}
    </StyledTooltip>
  );
};

export { Tooltip };
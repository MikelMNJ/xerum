import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (coords) setTipPosition(getStyle());
  }, [ coords, setTipPosition ]);

  const updatePos = e => {
    const x = e.clientX;
    const y = e.clientY;
    setCoords({ x, y });
  };

  function getStyle() {
    const target = tipRef.current;

    if (target && coords) {
      const width = target.clientWidth;
      const height = target.clientHeight;

      switch(position) {
        case "top":
          return {
            top: coords.y - height - offset,
            left: coords.x - (width / 2),
          };

        case "right":
          return {
            top: coords.y - (height / 2),
            left: coords.x + offset,
          };

        case "bottom":
          return {
            top: coords.y + offset,
            left: coords.x - (width / 2),
          };

        case "left":
          return {
            top: coords.y - (height / 2),
            left: coords.x - width - offset,
          };

        default:
          return {
            top: coords.y + offset,
            left: coords.x + offset,
          };
      };
    }
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
          color={textColor}
        >
          {text || children || "Missing tip text."}
        </Tip>
      )
    };
  };

  return (
    <StyledTooltip
      theme={theme}
      selectedTheme={selectedTheme}
      color={iconColor}
      onMouseOut={e => setShowTip(false)}
      onMouseMove={updatePos}
      onMouseOver={e => {
        updatePos(e);
        setShowTip(true);
      }}
      {...rest}
    >
      <i className={iconValid(icon) || "fa-solid fa-info-circle"} />
      {renderTip()}
    </StyledTooltip>
  );
};

export { Tooltip };
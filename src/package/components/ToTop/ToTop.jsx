import React, { useCallback, useEffect, useRef } from 'react';
import { iconValid, addEvent, removeEvent, resetPage } from '../../helpers';
import { StyledToTop } from './styles';

const ToTop = props => {
  const { theme, selectedTheme, icon, bgColor, iconColor, fixed } = props;
  const toTop = useRef();

  const scrollAction = useCallback(() => {
    const target = toTop.current;

    if (target) {
      const { style } = target;

      if (window.pageYOffset >= 145 || fixed) {
        style.setProperty('opacity', 1);
        style.setProperty('transform', 'translateY(0)');
      }

      if (window.pageYOffset < 145 && !fixed) {
        style.setProperty('opacity', 0);
        style.setProperty('transform', 'translateY(4.25rem)');
      }
    }
  }, [ fixed ]);

  useEffect(() => {
    addEvent('scroll', scrollAction);
    return () => removeEvent('scroll', scrollAction);
  }, [ scrollAction ]);

  return (
    <StyledToTop
      ref={toTop}
      $theme={theme}
      $selectedTheme={selectedTheme}
      $iconColor={iconColor}
      $bgColor={bgColor}
      onClick={e => resetPage(e, true)}
    >
      <i className={iconValid(icon) || 'fa-solid fa-angle-up'} />
    </StyledToTop>
  );
};

export { ToTop };
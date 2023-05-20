import React, { useEffect, useRef, useState } from 'react';
import { StyledDropdown } from './styles';

const Dropdown = props => {
  const { theme, selectedTheme, visible, setVisible, children } = props;
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
      theme={theme}
      selectedTheme={selectedTheme}
      visible={visible}
    >
      {children}
    </StyledDropdown>
  );
};

export { Dropdown };
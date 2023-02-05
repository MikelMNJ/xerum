import React, { useState } from 'react';
import { iconValid } from '../../helpers';
import { StyledToggle, Track, ToggleInput } from './styles';

const Toggle = props => {
  const {
    theme,
    selectedTheme,
    icon,
    iconColor,
    inactiveColor,
    activeColor,
    callback,
    ...rest
  } = props;

  const [ isChecked, setIsChecked ] = useState(rest.checked || false);

  const handleChange = e => {
    const newVal = e.currentTarget.checked;
    callback?.(newVal);
    setIsChecked(!isChecked);
  };

  return (
    <StyledToggle>
      <ToggleInput
        theme={theme}
        selectedTheme={selectedTheme}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        {...rest}
      />

      <Track
        theme={theme}
        selectedTheme={selectedTheme}
        checked={isChecked}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        iconColor={iconColor}
        disabled={rest.disabled}
      >
        <i className={iconValid(icon) || 'fa-solid fa-circle'} />
      </Track>
    </StyledToggle>
  );
};

export { Toggle };
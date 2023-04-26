import React, { useState } from 'react';
import { iconValid } from '../../helpers';
import { StyledToggle, Track, ToggleInput, FormikInput } from './styles';

const Toggle = props => {
  const {
    theme,
    selectedTheme,
    form,
    name,
    icon,
    iconColor,
    inactiveColor,
    activeColor,
    callback,
    ...rest
  } = props;

  const defaultState = (name && form?.values[name]) || false;
  const [ isChecked, setIsChecked ] = useState(defaultState);

  const handleChange = e => {
    const newVal = e.currentTarget.checked;
    callback?.(newVal);
    setIsChecked(!isChecked);

    if (form && name) {
      form.setFieldValue(name, newVal);
    }
  };

  return (
    <StyledToggle>
      {form && (
        <FormikInput
          theme={theme}
          $selectedTheme={selectedTheme}
          form={form}
          name={name}
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          {...rest}
        />
      )}

      {!form && (
        <ToggleInput
          theme={theme}
          selectedTheme={selectedTheme}
          name={name}
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          {...rest}
        />
      )}

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
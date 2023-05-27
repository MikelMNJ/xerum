import React, { useState, useEffect } from 'react';
import { iconValid } from '../../helpers';
import { StyledToggle, Track, ToggleInput, FormikInput } from './styles';
import _ from 'lodash';

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
    localDefault,
    callback,
    ...rest
  } = props;

  const defaultValue = (name && form?.values[name]) || localDefault || false;
  const [ checked, setChecked ] = useState(defaultValue);

  useEffect(() => {
    if (!_.isEqual(defaultValue, checked)) {
      setChecked(defaultValue);
    }
  }, [ defaultValue, checked ]);

  const handleFieldStateUpdate = e => {
    const newValue = e.currentTarget.checked;

    if (form && name) form.setFieldValue(name, newValue);
    callback?.(newValue);
    setChecked(!checked);
  };

  return (
    <StyledToggle>
      {form && (
        <FormikInput
          type='checkbox'
          name={name}
          $theme={theme}
          $selectedTheme={selectedTheme}
          form={form}
          checked={checked}
          onChange={handleFieldStateUpdate}
          {...rest}
        />
      )}

      {!form && (
        <ToggleInput
          type='checkbox'
          name={name}
          $theme={theme}
          $selectedTheme={selectedTheme}
          checked={checked}
          onChange={handleFieldStateUpdate}
          {...rest}
        />
      )}

      <Track
        $theme={theme}
        $selectedTheme={selectedTheme}
        checked={checked}
        $activeColor={activeColor}
        $inactiveColor={inactiveColor}
        $iconColor={iconColor}
        disabled={rest.disabled}
      >
        <i className={iconValid(icon) || 'fa-solid fa-circle'} />
      </Track>
    </StyledToggle>
  );
};

export { Toggle };
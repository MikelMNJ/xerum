import React, { useState, useEffect } from 'react';
import { iconValid } from '../../helpers';
import { StyledLabel, Box, Check } from './styles';
import { Field as FormikField } from 'formik';
import { Spacer } from '../Spacer/Spacer';
import _ from 'lodash';

const Checkbox = props => {
  const {
    theme,
    selectedTheme,
    name,
    label,
    icon,
    boxColor,
    checkColor,
    disabled,
    solidFill,
    form,
    callback,
    localDefault,
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
    const newValue = e.target.checked;

    if (form && name) form.setFieldValue(name, newValue);
    callback?.(newValue);
    setChecked(newValue);
  };

  return (
    <StyledLabel {...rest}>
      <Box
        $theme={theme}
        $selectedTheme={selectedTheme}
        $boxColor={boxColor}
        $solidFill={solidFill}
        disabled={disabled}
      >
        <Check
          $theme={theme}
          $selectedTheme={selectedTheme}
          $visible={checked}
          disabled={disabled}
          $checkColor={checkColor}
          $solidFill={solidFill}
          className={iconValid(icon) || 'fa-solid fa-check'}
        />
      </Box>

      {form && (
        <FormikField
          type='checkbox'
          name={name}
          checked={form?.values[name] || false}
          disabled={disabled}
          onChange={handleFieldStateUpdate}
        />
      )}

      {!form && (
        <input
          type='checkbox'
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={handleFieldStateUpdate}
        />
      )}

      {label && <Spacer size={0.5} across={true} />}
      {label}
    </StyledLabel>
  );
};

export { Checkbox };
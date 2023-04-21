import React, { useState } from 'react';
import { Field } from 'formik';
import { iconValid } from '../../helpers';
import { StyledLabel, Box, Check } from './styles';
import { Spacer } from '../Spacer/Spacer';

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
    ...rest
  } = props;

  const defaultState = (name && form?.values[name]) || false;

  const [ checked, setChecked ] = useState(defaultState);

  const handleFieldStateUpdate = e => {
    setChecked(e.target.checked);

    if (form && name) {
      form.setFieldValue(name, e.target.checked);
    }
  };

  return (
    <StyledLabel {...rest}>
      <Box
        theme={theme}
        selectedTheme={selectedTheme}
        boxColor={boxColor}
        solidFill={solidFill}
        disabled={disabled}
      >
        <Check
          theme={theme}
          selectedTheme={selectedTheme}
          visible={checked}
          disabled={disabled}
          checkColor={checkColor}
          solidFill={solidFill}
          className={iconValid(icon) || 'fa-solid fa-check'}
        />
      </Box>

      <Field
        type='checkbox'
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleFieldStateUpdate}
      />

      {label && <Spacer size={0.5} across={true} />}
      {label}
    </StyledLabel>
  );
};

export { Checkbox };
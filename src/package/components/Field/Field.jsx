import React, { useState } from 'react';
import { Field as FormikField } from 'formik';
import { iconValid } from '../../helpers';
import { StyledLabel, FieldLabels, FieldGroup, Icon } from './styles';
import { Spacer } from '../Spacer/Spacer';

const Field = props => {
  const {
    theme,
    selectedTheme,
    type,
    name,
    label,
    optional,
    icon,
    iconCallback,
    focusColor,
    textColor,
    disabled,
    solidFill,
    form,
    height,
    borderRadius,
    ...rest
  } = props;

  const defaultValue = (name && form?.values[name] || '');

  const [ fieldValue, setFieldValue ] = useState(defaultValue);

  const handleFieldStateUpdate = e => {
    setFieldValue(e.target.value);

    if (form && name) {
      form.setFieldValue(name, e.target.value);
    }
  };

  return (
    <StyledLabel
      theme={theme}
      selectedTheme={selectedTheme}
      solidFill={solidFill}
      focusColor={focusColor}
      textColor={textColor}
      disabled={disabled}
      icon={icon}
      height={height}
      borderRadius={borderRadius}
    >

      <FieldLabels>
        {label}
        {optional && <span>(Optional)</span>}
      </FieldLabels>

      {label && <Spacer size={0.5} />}

      <FieldGroup>
        {iconValid(icon) && (
          <Icon
            theme={theme}
            selectedTheme={selectedTheme}
            className={icon}
            disabled={disabled}
            solidFill={solidFill}
            textColor={textColor}
            onClick={iconCallback}
            height={height}
          />
        )}

        <FormikField
          type={type}
          name={name}
          value={fieldValue}
          disabled={disabled}
          onChange={handleFieldStateUpdate}
          {...rest}
        />
      </FieldGroup>
    </StyledLabel>
  );
};

export { Field };
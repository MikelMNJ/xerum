import React, { useState, useRef } from 'react';
import { iconValid } from '../../helpers';
import {
  StyledField,
  Icon,
  Optional,
  Label,
  LabelArea,
  LabelText,
  InputArea,
} from './styles';
import { Field as FormikField } from 'formik';
import { Spacer } from '../Spacer/Spacer';

const Field = props => {
  const {
    theme,
    selectedTheme,
    form,
    name,
    type,
    component,
    rows,
    placeholder,
    icon,
    iconColor,
    iconSize,
    iconCallback,
    borderRadius,
    label,
    fontFamily,
    fontSize,
    height,
    bgColor,
    borderSize,
    borderColor,
    bottomBorder,
    activeBorderColor,
    activeBorderSize,
    textColor,
    labelSize,
    labelColor,
    labelSpacing,
    optional,
    optionalText,
    optionalTextSize,
    optionalTextColor,
    placeholderColor,
    hideField,
    privacy,
    tabletSize,
    mobileSize,
    callback,
    ...rest
  } = props;

  const defaultValue = form?.values[name] || '';
  const [ inputValue, setInputValue ] = useState(defaultValue);
  const labelAreaRef = useRef();

  const handleFieldStateUpdate = e => {
    const newValue = e.target.value;

    if (form && name) form.setFieldValue(name, newValue);
    callback?.(newValue);
    setInputValue(newValue);
  };

  return (
    <StyledField $height={height} $labelHeight={labelAreaRef.current?.offsetHeight || 0}>
      <Label
        $theme={theme}
        $selectedTheme={selectedTheme}
        $labelSize={labelSize}
        $labelColor={labelColor}
        $labelSpacing={labelSpacing}
      >
        {(label || optional) && (
          <LabelArea ref={labelAreaRef}>
            <LabelText $label={label}>
              {label}

              <Optional
                $theme={theme}
                $selectedTheme={selectedTheme}
                $visible={optional}
                $optionalTextSize={optionalTextSize}
                $optionalTextColor={optionalTextColor}
              >
                {optionalText || 'optional'}
              </Optional>
            </LabelText>

            <Spacer size={labelSpacing ?? 0.5} />
          </LabelArea>
        )}

        {!hideField && (
          <InputArea
            $theme={theme}
            $selectedTheme={selectedTheme}
            $placeholderColor={placeholderColor}
            $height={height}
            $fontFamily={fontFamily}
            $fontSize={fontSize}
            $tabletSize={tabletSize}
            $mobileSize={mobileSize}
            $bgColor={bgColor}
            $textColor={textColor}
            $borderRadius={borderRadius}
            $borderSize={borderSize}
            $borderColor={borderColor}
            $activeBorderColor={activeBorderColor}
            $activeBorderSize={activeBorderSize}
            $bottomBorder={bottomBorder}
            $icon={icon}
          >
            {form && (
              <FormikField
                type={privacy ? 'password' : type || 'text'}
                name={name}
                component={component}
                rows={rows}
                placeholder={placeholder || ''}
                disabled={privacy || rest.disabled}
                value={privacy ? 'Private' : form?.values?.[name] || ''}
                onBlur={() => name && form?.setTouched({ ...form.touched, [name]: true })}
                autoComplete={rest.autoComplete}
                onChange={handleFieldStateUpdate}
              />
            )}

            {!form && component !== 'textarea' && (
              <input
                type={privacy ? 'password' : type || 'text'}
                name={name}
                placeholder={placeholder || ''}
                value={inputValue}
                disabled={rest.disabled}
                autoComplete={rest.autoComplete}
                onBlur={() => name && form?.setTouched({ ...form.touched, [name]: true })}
                onChange={handleFieldStateUpdate}
              />
            )}

            {!form && component === 'textarea' && (
              <textarea
                type={'text'}
                name={name}
                rows={rows}
                placeholder={placeholder || ''}
                disabled={privacy || rest.disabled}
                value={privacy ? 'Private' : inputValue}
                onBlur={() => name && form?.setTouched({ ...form.touched, [name]: true })}
                onChange={handleFieldStateUpdate}
              />
            )}

            <Icon
              $theme={theme}
              $selectedTheme={selectedTheme}
              $height={height}
              $iconColor={iconColor || textColor}
              $iconSize={iconSize}
              $iconCallback={iconCallback}
              $visible={icon && !privacy}
              onClick={() => {
                iconCallback?.();
              }}
            >
              {iconValid(icon) ? <i className={icon} /> : icon }
            </Icon>
          </InputArea>
        )}
      </Label>
    </StyledField>
  );
};

export { Field };
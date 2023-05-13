import React, { useState, useRef } from 'react';
import { iconValid } from '../../helpers';
import {
  StyledField,
  Icon,
  Optional,
  Input,
  Label,
  LabelArea,
  LabelText,
} from './styles';
import { Spacer } from '../Spacer/Spacer';

const Field = props => {
  const {
    theme,
    selectedTheme,
    form,
    name,
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
    ...rest
  } = props;

  const defaultValue = form?.values[name] || '';
  const [ inputValue, setInputValue ] = useState(defaultValue);
  const labelAreaRef = useRef();

  return (
    <StyledField height={height} labelHeight={labelAreaRef.current?.offsetHeight || 0}>
      <Label
        theme={theme}
        selectedTheme={selectedTheme}
        htmlFor={name || ''}
        labelSize={labelSize}
        labelColor={labelColor}
        labelSpacing={labelSpacing}
      >
        {(label || optional) && (
          <LabelArea ref={labelAreaRef}>
            <LabelText label={label}>
              {label}

              <Optional
                theme={theme}
                selectedTheme={selectedTheme}
                visible={optional}
                optionalTextSize={optionalTextSize}
                optionalTextColor={optionalTextColor}
              >
                {optionalText || 'optional'}
              </Optional>
            </LabelText>

            <Spacer size={labelSpacing ?? 0.5} />
          </LabelArea>
        )}

        {!hideField && (
          <>
            <Input
              theme={theme}
              selectedTheme={selectedTheme}
              name={name}
              placeholder={placeholder || ''}
              placeholderColor={placeholderColor}
              value={privacy ? 'Private' : inputValue || ''}
              height={height}
              fontFamily={fontFamily}
              fontSize={fontSize}
              bgColor={bgColor}
              textColor={textColor}
              borderRadius={borderRadius}
              borderSize={borderSize}
              borderColor={borderColor}
              activeBorderColor={activeBorderColor}
              activeBorderSize={activeBorderSize}
              bottomBorder={bottomBorder}
              icon={icon}
              onBlur={() => name && form?.setTouched({ ...form.touched, [name]: true })}
              onChange={e => {
                const newValue = e.target.value;

                if (form && name) form.setFieldValue(name, newValue);
                setInputValue(newValue);
              }}
              {...rest}
            />

            <Icon
              theme={theme}
              selectedTheme={selectedTheme}
              height={height}
              iconColor={iconColor || textColor}
              iconSize={iconSize}
              iconCallback={iconCallback}
              onClick={() => {
                iconCallback?.();
              }}
            >
              {iconValid(icon) ? <i className={icon} /> : icon }
            </Icon>
          </>
        )}
      </Label>
    </StyledField>
  );
};

export { Field };
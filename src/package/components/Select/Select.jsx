/* eslint-disable */
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { iconValid } from '../../helpers';
import {
  StyledSelect,
  Icon,
  StyledOptions,
  OptionsArea,
  Optional,
  InputArea,
  Label,
  LabelArea,
  LabelText,
} from './styles';
import {
  updateFormState,
  buildPlaceholder,
  updateField,
  handleChange,
  getOverflowState,
  buildOptions,
} from './functions';
import { Field as FormikField } from 'formik';
import { Spacer } from '../Spacer/Spacer';
import _ from 'lodash';

const Select = props => {
  const {
    theme,
    selectedTheme,
    form,
    name,
    data,
    icon,
    iconColor,
    iconSize,
    borderRadius,
    loading,
    label,
    fontFamily,
    fontSize,
    loadingText,
    noDataText,
    height,
    maxHeight,
    bgColor,
    borderSize,
    borderColor,
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
    top,
    placeholderColor,
    privacy,
    hideField,
    callback,
    ...rest
  } = props;

  const defaultValue = form?.values[name] && data?.find(item => (
    _.toLower(item.value.toString()) === _.toLower(form.values[name].toString())
  ));

  const [ selectedOption, setSelectedOption ] = useState(defaultValue);
  const [ optionsMenuVisible, setOptionsMenuVisible ] = useState(false);
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredData, setFilteredData ] = useState(data);
  const [ hasOverflow, setHasOverflow ] = useState(null);

  const inputRef = useRef();
  const labelAreaRef = useRef();
  const optionsRef = useRef();

  useEffect(() => {
    if (optionsMenuVisible) {
      const handleOutsideClick = e => !inputRef.current?.contains(e.target) && setOptionsMenuVisible(false);
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [ optionsMenuVisible, setOptionsMenuVisible ]);

  useEffect(() => {
    const updateFormStateArgs = { form, name, selectedOption };
    updateFormState(updateFormStateArgs);
    getOverflowState({ optionsRef, setHasOverflow });
    // eslint-disable-next-line
  }, [ optionsMenuVisible, searchValue, selectedOption, name ]);

  const options = useMemo(() => {
    // Bug where preloading expense and opening drop down doesn't show expected expense is here...
    if (!selectedOption) setSelectedOption(data?.[0]);

    return data;
  }, [ data, selectedOption ]);

  const optionArgs = { form, name, selectedOption, setSelectedOption, setOptionsMenuVisible, filteredData };
  const changeArgs = { options, setSearchValue, setFilteredData };
  const placeholderArgs = { loading, data, loadingText, selectedOption, noDataText };
  const updateFieldArgs = {
    setSelectedOption,
    callback,
    setOptionsMenuVisible,
    setFilteredData,
    setSearchValue,
    inputRef,
    options,
  };

  return (
    <StyledSelect height={height} labelHeight={labelAreaRef.current?.offsetHeight || 0}>
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
          <InputArea
            theme={theme}
            selectedTheme={selectedTheme}
            height={height}
            fontFamily={fontFamily}
            fontSize={fontSize}
            bgColor={bgColor}
            textColor={textColor}
            menuVisible={optionsMenuVisible}
            borderRadius={borderRadius}
            borderSize={borderSize}
            borderColor={borderColor}
            activeBorderColor={activeBorderColor}
            activeBorderSize={activeBorderSize}
            icon={icon}
            placeholderColor={placeholderColor}
          >
            {form && (
              <FormikField
                innerRef={inputRef}
                name={name}
                placeholder={optionsMenuVisible ? defaultValue?.label : buildPlaceholder(placeholderArgs)}
                type={privacy ? 'password' : 'text'}
                value={(optionsMenuVisible ? searchValue : defaultValue?.label || '')}
                readOnly={!optionsMenuVisible}
                onFocus={() => updateField(true, updateFieldArgs)}
                onBlur={() => {
                  if (name && form) form.setTouched({ ...form.touched, [name]: true });
                  updateField(false, updateFieldArgs, filteredData?.length === 1 && filteredData[0]);
                }}
                onKeyUp={e => e.key === 'Enter' && inputRef.current?.blur()}
                onClick={() => updateField(true, updateFieldArgs)}
                onChange={e => handleChange(e, changeArgs)}
                {...rest}
              />
            )}

            {!form && (
              <input
                ref={inputRef}
                name={name}
                placeholder={optionsMenuVisible ? selectedOption?.label : buildPlaceholder(placeholderArgs)}
                type={privacy ? 'password' : 'text'}
                value={(optionsMenuVisible ? searchValue : selectedOption?.label || '')}
                readOnly={!optionsMenuVisible}
                onFocus={() => updateField(true, updateFieldArgs)}
                onBlur={() => {
                  if (name && form) form.setTouched({ ...form.touched, [name]: true });
                  updateField(false, updateFieldArgs, filteredData?.length === 1 && filteredData[0]);
                }}
                onKeyUp={e => e.key === 'Enter' && inputRef.current?.blur()}
                onClick={() => updateField(true, updateFieldArgs)}
                onChange={e => handleChange(e, changeArgs)}
                {...rest}
              />
            )}

            <Icon
              theme={theme}
              selectedTheme={selectedTheme}
              height={height}
              iconColor={iconColor || textColor}
              iconSize={iconSize}
              menuVisible={optionsMenuVisible}
            >
              {iconValid(icon)
                ? <i className={icon} />
                : icon || <i className='fa-solid fa-chevron-down' />
              }
            </Icon>
          </InputArea>
        )}
      </Label>

      <OptionsArea
        theme={theme}
        selectedTheme={selectedTheme}
        menuVisible={optionsMenuVisible}
        height={height}
        top={top}
        label={label}
        labelHeight={labelAreaRef.current?.offsetHeight || 0}
        labelSpacing={labelSpacing || 0}
        bgColor={bgColor}
        borderRadius={borderRadius}
        borderSize={borderSize}
        borderColor={borderColor}
        onClick={() => updateField(false, updateFieldArgs)}
        onMouseDown={e => e.preventDefault()}
      >
        <StyledOptions
          ref={optionsRef}
          theme={theme}
          selectedTheme={selectedTheme}
          maxHeight={maxHeight}
          hasOverflow={hasOverflow}
        >
          {buildOptions(props, optionArgs)}
        </StyledOptions>
      </OptionsArea>
    </StyledSelect>
  );
};

export { Select };
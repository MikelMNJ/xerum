import React, { useMemo, useState, useEffect, useRef } from 'react';
import { iconValid } from '../../helpers';
import {
  StyledSelect,
  Icon,
  StyledOptions,
  OptionsArea,
  Optional,
  Option,
  NoResults,
  InputArea,
  Label,
  LabelArea,
  LabelText,
} from './styles';
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
    optionTextColor,
    activeOptionTextColor,
    optionBgHoverColor,
    activeOptionBgColor,
    activeOptionBgHoverColor,
    noResultsText,
    top,
    placeholderColor,
    privacy,
    hideField,
    callback,
  } = props;

  const defaultValue = form?.values[name] && data?.find(item => (
    _.toLower(item.value?.toString()) === _.toLower(form.values[name].toString())
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
      const handleEscape = e => e.key === 'Escape' && setOptionsMenuVisible(false);
      const handleOutsideClick = e => {
        if (!inputRef.current?.contains(e.target)) {
          setOptionsMenuVisible(false);
        }
      };

      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [ optionsMenuVisible, setOptionsMenuVisible ]);

  useEffect(() => {
    const firstOption = data?.[0];
    const isDifferent = !_.isEqual(selectedOption, firstOption);

    if (!selectedOption && isDifferent) {
      setSelectedOption(firstOption);
      form?.setFieldValue(name, firstOption?.value);
    }

    getOverflowState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ optionsMenuVisible, searchValue, name ]);

  const options = useMemo(() => data, [ data ]);

  const getOverflowState = () => {
    if (optionsRef.current) {
      const { clientHeight, scrollHeight } = optionsRef.current;
      const overflow = scrollHeight > clientHeight;

      setHasOverflow(overflow);
    }
  };

  const handleSearchChange = e => {
    const newValue = e.target.value;
    const match = option => _.includes(_.toLower(option.label), _.toLower(newValue));

    setSearchValue(newValue);
    setFilteredData(options?.filter(option => match(option)));
  };

  const handleOptionChange = (e, option) => {
    const different = !_.isEqual(selectedOption, option);

    if (different) {
      setSelectedOption(option);
      form?.setFieldValue(name, option?.value);
      callback?.(option?.value);
    }

    setOptionsMenuVisible(false);
  };

  const updateField = onlyResult => {
    if (onlyResult) {
      setSelectedOption(onlyResult);
      form?.setFieldValue(name, onlyResult.value);
      callback?.(onlyResult?.value);
    }

    setSearchValue('');
    setFilteredData(options);
    setOptionsMenuVisible(false);
  };

  const buildOptions = () => {
    if (_.isEmpty(filteredData)) {
      return (
        <NoResults>
          {noResultsText || 'No results found'}
        </NoResults>
      );
    }

    return filteredData?.map?.((option, index) => {
      const { value, label } = option;
      const active = _.isEqual(selectedOption, option);

      return (
        <Option
          key={index}
          theme={theme}
          selectedTheme={selectedTheme}
          value={value}
          height={height}
          borderRadius={borderRadius}
          optionTextColor={optionTextColor}
          activeOptionTextColor={activeOptionTextColor}
          bgColor={bgColor}
          optionBgHoverColor={optionBgHoverColor}
          activeOptionBgColor={activeOptionBgColor}
          activeOptionBgHoverColor={activeOptionBgHoverColor}
          active={active}
          fontFamily={fontFamily}
          onClick={e => handleOptionChange(e, option)}
        >
          {label}
        </Option>
      );
    });
  };

  const buildPlaceholder = () => {
    if (loading && _.isEmpty(data)) return loadingText || 'Loading...';
    if (!loading && _.isEmpty(data)) return noDataText || 'No options available';
    return selectedOption?.label || 'Select an option...';
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
                placeholder={optionsMenuVisible ? defaultValue?.label : buildPlaceholder()}
                type={privacy ? 'password' : 'text'}
                value={(optionsMenuVisible ? searchValue : defaultValue?.label || '')}
                readOnly={!optionsMenuVisible}
                onFocus={() => inputRef.current?.click()}
                onKeyUp={e => e.key === 'Enter' && inputRef.current?.blur()}
                onClick={() => setOptionsMenuVisible(true)}
                onChange={handleSearchChange}
                onBlur={() => {
                  const onlyResult = filteredData?.length === 1 && filteredData[0];
                  if (name && form) form.setTouched({ ...form.touched, [name]: true });
                  updateField(onlyResult);
                }}
              />
            )}

            {!form && (
              <input
                ref={inputRef}
                name={name}
                placeholder={optionsMenuVisible ? selectedOption?.label : buildPlaceholder()}
                type={privacy ? 'password' : 'text'}
                value={(optionsMenuVisible ? searchValue : selectedOption?.label || '')}
                readOnly={!optionsMenuVisible}
                onFocus={() => inputRef.current?.click()}
                onKeyUp={e => e.key === 'Enter' && inputRef.current?.blur()}
                onClick={() => setOptionsMenuVisible(true)}
                onChange={handleSearchChange}
                onBlur={() => {
                  const onlyResult = filteredData?.length === 1 && filteredData[0];
                  updateField(onlyResult);
                }}
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
        onMouseDown={e => e.preventDefault()}
      >
        <StyledOptions
          ref={optionsRef}
          theme={theme}
          selectedTheme={selectedTheme}
          maxHeight={maxHeight}
          hasOverflow={hasOverflow}
        >
          {buildOptions()}
        </StyledOptions>
      </OptionsArea>
    </StyledSelect>
  );
};

export { Select };
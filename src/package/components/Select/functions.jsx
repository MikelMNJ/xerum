import React from 'react';
import { Option, NoResults } from './styles';
import _ from 'lodash';

export const updateFormState = args => {
  const { form, name, newValue, selectedOption } = args;

  if (form && name && !_.isEqual(form.values[name], selectedOption?.value)) {
    form.setFieldValue(name, newValue);
  }
};

const handleOptionChange = (e, args) => {
  const { option, callback, selectedOption, setSelectedOption, setOptionsMenuVisible } = args;
  const newValue = _.toLower(e.target.innerHTML);
  const different = !_.isEqual(selectedOption?.value, newValue);

  if (different) {
    setSelectedOption(option);
    callback?.(option?.value);
  }

  setOptionsMenuVisible(false);
};

export const buildPlaceholder = args => {
  const { loading, data, selectedOption, loadingText, noDataText } = args;

  if (loading && _.isEmpty(data)) return loadingText || 'Loading...';
  if (!loading && _.isEmpty(data)) return noDataText || 'No options available';
  return selectedOption?.label || 'Select an option...';
};

export const updateField = (menuVisibility, args, onlyResult) => {
  const {
    setSelectedOption,
    callback,
    setOptionsMenuVisible,
    setFilteredData,
    setSearchValue,
    inputRef,
    options,
  } = args;

  if (onlyResult) {
    setSelectedOption(onlyResult);
    callback?.(onlyResult?.value);
  }

  setOptionsMenuVisible(menuVisibility);
  setFilteredData(options);
  setSearchValue('');
  if (!menuVisibility) inputRef.current?.blur();
};

export const handleChange = (e, args) => {
  const { options, setSearchValue, setFilteredData } = args;
  const value = e.target.value;
  const match = option => _.includes(_.toLower(option.label), _.toLower(value));

  setSearchValue(value);
  setFilteredData(options?.filter(option => match(option)));
};

export const getOverflowState = args => {
  const { optionsRef, setHasOverflow } = args;

  if (optionsRef.current) {
    const { clientHeight, scrollHeight } = optionsRef.current;
    const overflow = scrollHeight > clientHeight;

    setHasOverflow(overflow);
  }
};

export const buildOptions = (props, args) => {
  const {
    theme,
    selectedTheme,
    noResultsText,
    height,
    fontFamily,
    borderRadius,
    optionTextColor,
    activeOptionTextColor,
    bgColor,
    optionBgHoverColor,
    activeOptionBgColor,
    activeOptionBgHoverColor,
    callback,
  } = props;

  const {
    selectedOption,
    setSelectedOption,
    setOptionsMenuVisible,
    filteredData,
  } = args;

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
    const optionChangeArgs = { option, callback, selectedOption, setSelectedOption, setOptionsMenuVisible };

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
        onClick={e => handleOptionChange(e, optionChangeArgs)}
      >
        {label}
      </Option>
    );
  });
};
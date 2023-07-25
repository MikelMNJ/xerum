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
  OptionNote,
} from './styles';
import { PrivacyMask } from '../PrivacyMask/PrivacyMask';
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
    localDefault,
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
    disabledOptionTextColor,
    disabledOptionBgColor,
    disabledOptionBgHoverColor,
    noResultsText,
    top,
    placeholderColor,
    privacy,
    hideField,
    tabletSize,
    mobileSize,
    disabled,
    callback,
  } = props;

  const defaultValue = _.toString(form?.values[name]) && data?.find(item => {
    const thisItem = _.toLower(_.toString(item.value));
    const fieldValue = _.toLower(_.toString(form.values[name]));
    const match = thisItem === fieldValue;

    if (match) return item;
  }) || localDefault;

  const [ selectedOption, setSelectedOption ] = useState(defaultValue);
  const [ optionsMenuVisible, setOptionsMenuVisible ] = useState(false);
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredData, setFilteredData ] = useState(data);
  const [ hasOverflow, setHasOverflow ] = useState(null);

  const inputRef = useRef();
  const labelAreaRef = useRef();
  const optionsRef = useRef();
  const options = useMemo(() => data, [ data ]);

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
    if (!_.isEqual(filteredData, options)) {
      setFilteredData(options);
    }
  }, [ filteredData, options, setFilteredData, data ]);

  useEffect(() => {
    const firstOption = data?.[0];
    const different = !_.isEqual(form ? defaultValue : selectedOption, form ? selectedOption : firstOption);

    if (!selectedOption && different) setSelectedOption(firstOption);
    if (form && different) setSelectedOption(defaultValue);

    if (form && !selectedOption) {
      setSelectedOption(firstOption);
      form?.setFieldValue(name, _.toString(firstOption?.value));
    }

    getOverflowState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ optionsMenuVisible, searchValue, name, data, selectedOption, defaultValue ]);

  const getOverflowState = () => {
    if (optionsRef.current) {
      const { clientHeight, scrollHeight } = optionsRef.current;
      const overflow = scrollHeight > clientHeight;

      setHasOverflow(overflow);
    }
  };

  const handleSearchChange = e => {
    const newValue = _.toString(e.target.value);
    const match = option => _.includes(_.toLower(option.label), _.toLower(newValue));

    setSearchValue(newValue);
    setFilteredData(options?.filter(option => match(option)));
  };

  const handleOptionChange = (e, option) => {
    const { disabled } = option;
    const different = !_.isEqual(selectedOption, option);

    if (different && !disabled) {
      setSelectedOption(option);
      form?.setFieldValue(name, _.toString(option?.value));
      callback?.(_.toString(option?.value));
    }

    setOptionsMenuVisible(false);
  };

  const updateField = onlyResult => {
    if (onlyResult && !onlyResult.disabled) {
      setSelectedOption(onlyResult);
      form?.setFieldValue(name, _.toString(onlyResult.value));
      callback?.(_.toString(onlyResult?.value));
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
      const { value, label, disabled, note } = option;
      const active = _.isEqual(selectedOption, option);

      return (
        <Option
          key={index}
          $theme={theme}
          $selectedTheme={selectedTheme}
          value={_.toString(value)}
          $height={height}
          $borderRadius={borderRadius}
          $optionTextColor={optionTextColor}
          $activeOptionTextColor={activeOptionTextColor}
          $disabledOptionTextColor={disabledOptionTextColor}
          $bgColor={bgColor}
          $optionBgHoverColor={optionBgHoverColor}
          $activeOptionBgColor={activeOptionBgColor}
          $disabledOptionBgColor={disabledOptionBgColor}
          $activeOptionBgHoverColor={activeOptionBgHoverColor}
          $disabledOptionBgHoverColor={disabledOptionBgHoverColor}
          $active={active}
          $fontFamily={fontFamily}
          $disabled={disabled}
          onClick={e => handleOptionChange(e, option)}
        >
          {privacy
            ? <PrivacyMask length={label.length} />
            : <>
                {label}
                {note && (
                  <OptionNote>
                    <Spacer across={true} />
                    {note}
                  </OptionNote>
                )}
              </>
            }
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
    <StyledSelect $height={height} $labelHeight={labelAreaRef.current?.offsetHeight || 0}>
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
            $height={height}
            $fontFamily={fontFamily}
            $fontSize={fontSize}
            $bgColor={bgColor}
            $textColor={textColor}
            $menuVisible={optionsMenuVisible}
            $borderRadius={borderRadius}
            $borderSize={borderSize}
            $borderColor={borderColor}
            $activeBorderColor={activeBorderColor}
            $activeBorderSize={activeBorderSize}
            $icon={icon}
            $tabletSize={tabletSize}
            $mobileSize={mobileSize}
            $placeholderColor={placeholderColor}
          >
            {form && (
              <FormikField
                innerRef={inputRef}
                name={name}
                placeholder={privacy ? 'Private' : (optionsMenuVisible ? defaultValue?.label : buildPlaceholder())}
                type={privacy ? 'password' : 'text'}
                value={(optionsMenuVisible
                  ? searchValue
                  : `${defaultValue?.label || ''} ${defaultValue?.note || ''}`
                )}
                readOnly={!optionsMenuVisible}
                disabled={disabled}
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
                placeholder={privacy ? 'Private' : buildPlaceholder()}
                type={privacy ? 'password' : 'text'}
                value={(optionsMenuVisible
                  ? searchValue
                  : `${selectedOption?.label || ''} ${selectedOption?.note || ''}`
                )}
                readOnly={!optionsMenuVisible}
                disabled={disabled}
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
              $theme={theme}
              $selectedTheme={selectedTheme}
              $height={height}
              $iconColor={iconColor || textColor}
              $iconSize={iconSize}
              $menuVisible={optionsMenuVisible}
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
        $theme={theme}
        $selectedTheme={selectedTheme}
        $menuVisible={optionsMenuVisible}
        $height={height}
        $top={top}
        $label={label}
        $labelHeight={labelAreaRef.current?.offsetHeight || 0}
        $labelSpacing={labelSpacing || 0}
        $bgColor={bgColor}
        $borderRadius={borderRadius}
        $borderSize={borderSize}
        $borderColor={borderColor}
        $fontSize={fontSize}
        $tabletSize={tabletSize}
        $mobileSize={mobileSize}
        onMouseDown={e => e.preventDefault()}
      >
        <StyledOptions
          ref={optionsRef}
          $theme={theme}
          $selectedTheme={selectedTheme}
          $maxHeight={maxHeight}
          $hasOverflow={hasOverflow}
        >
          {buildOptions()}
        </StyledOptions>
      </OptionsArea>
    </StyledSelect>
  );
};

export { Select };
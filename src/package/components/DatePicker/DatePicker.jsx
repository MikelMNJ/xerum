import React, { useState, useEffect, useRef } from 'react';
import { iconValid } from '../../helpers';
import {
  StyledDatePicker,
  Icon,
  CalendarArea,
  Optional,
  InputArea,
  Label,
  LabelArea,
  LabelText,
} from './styles';
import { Field as FormikField } from 'formik';
import { Spacer } from '../Spacer/Spacer';
import { Calendar } from '../Calendar/Calendar';
import _ from 'lodash';
import moment from 'moment';

const DatePicker = props => {
  const {
    theme,
    selectedTheme,
    form,
    defaultDate,
    name,
    icon,
    iconColor,
    iconSize,
    borderRadius,
    label,
    fontFamily,
    headerFontFamily,
    fontSize,
    noDateText,
    height,
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
    hideField,
    tabletSize,
    mobileSize,
    headerColor,
    textHoverColor,
    bgHoverColor,
    activeTextColor,
    activeTextHoverColor,
    activeBGColor,
    activeBGHoverColor,
    iconBGColor,
    iconBGHoverColor,
    disabled,
    disablePastDates,
    disabledTextColor,
    disabledBgColor,
    disabledBGHoverColor,
    callback,
  } = props;

  const [ selectedDate, setSelectedDate ] = useState(defaultDate);
  const [ optionsMenuVisible, setOptionsMenuVisible ] = useState(false);

  const inputRef = useRef();
  const labelAreaRef = useRef();

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

  const updateField = newDate => {
    const formattedDate = newDate && moment(newDate).format('MMMM Do, YYYY');

    setSelectedDate(formattedDate);
    form?.setFieldValue(name, _.toString(formattedDate || ''));
    callback?.(newDate);
    setOptionsMenuVisible(false);
  };

  const buildPlaceholder = () => {
    if (_.isEmpty(defaultDate)) return noDateText || 'Select a date...';
    return selectedDate;
  };

  return (
    <StyledDatePicker $height={height} $labelHeight={labelAreaRef.current?.offsetHeight || 0}>
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
                placeholder={buildPlaceholder()}
                type='text'
                value={selectedDate || ''}
                readOnly={true}
                disabled={disabled}
                onFocus={() => inputRef.current?.click()}
                onKeyUp={e => e.key === 'Enter' && inputRef.current?.blur()}
                onClick={() => setOptionsMenuVisible(true)}
                onBlur={() => name && form && form.setTouched({ ...form.touched, [name]: true })}
              />
            )}

            {!form && (
              <input
                ref={inputRef}
                name={name}
                placeholder={buildPlaceholder()}
                type='text'
                value={selectedDate || ''}
                readOnly={true}
                disabled={disabled}
                onFocus={() => inputRef.current?.click()}
                onKeyUp={e => e.key === 'Enter' && inputRef.current?.blur()}
                onClick={() => setOptionsMenuVisible(true)}
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

      <CalendarArea
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
        <Calendar
          theme={theme}
          selectedTheme={selectedTheme}
          selectedDate={selectedDate}
          disablePastDates={disablePastDates}
          icon={icon}
          fontFamily={fontFamily}
          headerFontFamily={headerFontFamily}
          headerColor={headerColor}
          textColor={textColor}
          textHoverColor={textHoverColor}
          bgHoverColor={bgHoverColor}
          activeTextColor={activeTextColor}
          activeTextHoverColor={activeTextHoverColor}
          activeBGColor={activeBGColor}
          activeBGHoverColor={activeBGHoverColor}
          disabledTextColor={disabledTextColor}
          disabledBgColor={disabledBgColor}
          disabledBGHoverColor={disabledBGHoverColor}
          iconColor={iconColor}
          iconBGColor={iconBGColor}
          iconBGHoverColor={iconBGHoverColor}
          iconSize={iconSize}
          callback={newVal => updateField(newVal)}
        />
      </CalendarArea>
    </StyledDatePicker>
  );
};

export { DatePicker };
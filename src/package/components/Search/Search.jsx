import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { iconValid } from '../../helpers';
import { StyledSearch, Label, Input, SubmitButton, Icon, ClearIcon } from './styles';
import _ from 'lodash';

const debounceCallback = (callback, continuousSearchDelayTime) => {
  return _.debounce(callback, continuousSearchDelayTime || 1000);
};

const Search = forwardRef((props, externalRef) => {
  const {
    theme,
    selectedTheme,
    callback,
    placeholder,
    noIcon,
    pill,
    round,
    buttonText,
    noButton,
    defaultValue,
    placeholderColor,
    inputIcon,
    inputIconHeight,
    inputIconSize,
    inputTextColor,
    inputBGColor,
    inputIconColor,
    clearIcon,
    clearIconHeight,
    clearIconSize,
    clearIconColor,
    noClearIcon,
    fontFamily,
    borderColor,
    borderRadius,
    borderSize,
    bottomBorder,
    buttonIcon,
    buttonColor,
    buttonTextColor,
    buttonHoverColor,
    focusColor,
    solidFill,
    boxColor,
    mobileSize,
    tabletSize,
    useContinuousSearch,
    continuousSearchDelayTime,
    disabled,
  } = props;

  const [ filterValue, setFilterValue ] = useState(defaultValue || '');
  const [ buttonWidth, setButtonWidth ] = useState(3);
  const [ typingInField, setTypingInField ] = useState(false);
  const inputRef = useRef('');
  const buttonRef = useRef();

  const continuousSearchCallbackRef = useRef(debounceCallback(value => callback(value), continuousSearchDelayTime));

  useEffect(() => {
    if (useContinuousSearch && noButton && typingInField) {
      continuousSearchCallbackRef.current(filterValue);
    }
  }, [ filterValue, useContinuousSearch, typingInField, noButton ]);

  useEffect(() => {
    if (buttonRef.current && buttonRef.current !== buttonWidth) {
      setButtonWidth(buttonRef.current.offsetWidth / 16);
    }
  }, [ buttonRef, buttonWidth ]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputVal = inputRef.current?.value;

    if (callback && inputVal !== '' && !disabled && !useContinuousSearch) {
      callback(filterValue || inputVal);
      inputRef.current.blur();
    }
  };

  return (
    <StyledSearch>
      <Label $theme={theme} $selectedTheme={selectedTheme} $noButton={noButton} $inputIconColor={inputIconColor}>
        {!noIcon && (
          <Icon
            $theme={theme}
            $selectedTheme={selectedTheme}
            $height={inputIconHeight}
            $inputIconColor={inputIconColor || inputTextColor}
            $inputIconSize={inputIconSize}
            disabled={disabled}
          >
            {iconValid(inputIcon)
              ? <i className={inputIcon} />
              : inputIcon || <i className='fa-solid fa-magnifying-glass' />
            }
          </Icon>
        )}

        <Input
          $theme={theme}
          $selectedTheme={selectedTheme}
          ref={element => {
            if (externalRef) externalRef.current = element;
            inputRef.current = element;
          }}
          type='text'
          $noIcon={noIcon}
          $pill={pill}
          $round={round}
          $borderColor={borderColor}
          $borderRadius={borderRadius}
          $borderSize={borderSize}
          $bottomBorder={bottomBorder}
          $inputTextColor={inputTextColor}
          $placeholderColor={placeholderColor}
          $inputBGColor={inputBGColor}
          placeholder={placeholder}
          $focusColor={focusColor}
          $buttonWidth={buttonWidth}
          $fontFamily={fontFamily}
          $mobileSize={mobileSize}
          $tabletSize={tabletSize}
          $solidFill={solidFill}
          $boxColor={boxColor}
          $noButton={noButton}
          defaultValue={filterValue || ''}
          disabled={disabled}
          onChange={e => {
            const newValue = e.currentTarget?.value || '';
            const refValue = inputRef.current.value;
            setFilterValue(newValue);

            if (!typingInField && !_.isEmpty(newValue)) {
              setTypingInField(true);
            }

            if (noButton && !_.isEmpty(refValue)) {
              inputRef.current.value = newValue;
            }
          }}
          onBlur={() => setTypingInField(false)}
          onKeyUp={e => e.key === 'Enter' && handleSubmit(e)}
        />

        {!noClearIcon && noButton && !_.isEmpty(filterValue) && (
          <ClearIcon
            $theme={theme}
            $selectedTheme={selectedTheme}
            $height={clearIconHeight}
            $clearIconColor={clearIconColor || inputTextColor}
            $clearIconSize={clearIconSize}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();

              if (inputRef.current) {
                setFilterValue('');
                inputRef.current.value = '';
                callback?.('');
              }
            }}
          >
            {iconValid(clearIcon)
              ? <i className={clearIcon} />
              : clearIcon || <i className='fa-solid fa-circle-xmark' />
            }
          </ClearIcon>
        )}

        {!noButton && (
          <SubmitButton
            $theme={theme}
            $selectedTheme={selectedTheme}
            ref={buttonRef}
            $pill={pill}
            $round={round}
            $fontFamily={fontFamily}
            $borderRadius={borderRadius}
            $buttonColor={buttonColor}
            $buttonTextColor={buttonTextColor}
            $buttonHoverColor={buttonHoverColor}
            disabled={disabled}
            onClick={handleSubmit}
          >
            {iconValid(buttonIcon)
              ? <i className={buttonIcon} />
              : buttonIcon || buttonText || 'Search'
            }
          </SubmitButton>
        )}
      </Label>
    </StyledSearch>
  );
});

export { Search };
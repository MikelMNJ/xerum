import React, { useRef, useEffect, useState } from 'react';
import { iconValid } from '../../helpers';
import { StyledSearch, Label, Input, SubmitButton, Icon } from './styles';

const Search = props => {
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
    placeholderColor,
    inputIcon,
    inputIconHeight,
    inputIconSize,
    inputTextColor,
    inputBGColor,
    inputIconColor,
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
    disabled,
  } = props;

  const [ buttonWidth, setButtonWidth ] = useState(3);
  const inputRef = useRef('');
  const buttonRef = useRef();

  useEffect(() => {
    if (buttonRef.current && buttonRef.current !== buttonWidth) {
      setButtonWidth(buttonRef.current.offsetWidth / 16);
    }
  }, [ buttonRef, buttonWidth ]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputVal = inputRef.current?.value;

    if (callback && inputVal !== '' && !disabled) {
      callback(inputVal);
    }
  };

  const updateRef = e => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
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
          ref={inputRef}
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
          $solidFill={solidFill}
          $boxColor={boxColor}
          defaultValue={inputRef.current?.value || ''}
          disabled={disabled}
          onChange={updateRef}
          onKeyUp={e => e.key === 'Enter' && handleSubmit(e)}
          onBlur={e => noButton && handleSubmit(e)}
        />

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
};

export { Search };
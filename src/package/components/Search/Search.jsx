import React, { cloneElement, useRef, useEffect, useState } from 'react';
import { iconValid } from '../../helpers';
import { StyledSearch, Label, Input, SubmitButton } from './styles';

const Search = props => {
  const {
    theme,
    selectedTheme,
    callback,
    placeholder,
    inputIcon,
    noIcon,
    pill,
    round,
    buttonText,
    noButton,
    strokeWidth,
    placeholderColor,
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
    ...rest
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

    if (callback && inputVal !== '') {
      callback(inputVal);
    }
  };

  const updateRef = e => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
  };

  return (
    <StyledSearch {...rest}>
      <Label theme={theme} selectedTheme={selectedTheme} noButton={noButton} inputIconColor={inputIconColor}>
        {!noIcon && (
          <i className={iconValid(inputIcon) || 'fa-solid fa-magnifying-glass'} />
        )}

        <Input
          theme={theme}
          selectedTheme={selectedTheme}
          ref={inputRef}
          type='text'
          noIcon={noIcon}
          pill={pill}
          round={round}
          strokeWidth={strokeWidth}
          borderColor={borderColor}
          borderRadius={borderRadius}
          borderSize={borderSize}
          bottomBorder={bottomBorder}
          inputTextColor={inputTextColor}
          placeholderColor={placeholderColor}
          inputBGColor={inputBGColor}
          placeholder={placeholder}
          focusColor={focusColor}
          buttonWidth={buttonWidth}
          fontFamily={fontFamily}
          defaultValue={inputRef.current?.value || ''}
          onChange={updateRef}
          onKeyUp={e => e.key === 'Enter' && handleSubmit(e)}
          onBlur={e => noButton && handleSubmit(e)}
        />

        {!noButton && cloneElement(
          <SubmitButton
            theme={theme}
            selectedTheme={selectedTheme}
            ref={buttonRef}
            text={buttonText}
            noText={!buttonText}
            pill={pill}
            round={round}
            icon={buttonIcon}
            fontFamily={fontFamily}
            color={buttonColor}
            textColor={buttonTextColor}
            hoverColor={buttonHoverColor}
            onClick={handleSubmit}
          />,
        )}
      </Label>
    </StyledSearch>
  );
};

export { Search };
import React, { cloneElement, useRef } from 'react';
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
    rounded,
    btnText,
    noButton,
    inputBGColor,
    borderColor,
    btnIcon,
    ...rest
  } = props;

  const inputRef = useRef('');

  const handleSubmit = e => {
    e.preventDefault();
    const inputVal = inputRef.current?.value;

    if (callback && inputVal !== '') {
      callback(inputVal);
      inputRef.current.value = '';
    }
  };

  const updateRef = e => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
  };

  return (
    <StyledSearch {...rest}>
      <Label theme={theme} selectedTheme={selectedTheme} noButton={noButton}>
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
          rounded={rounded}
          borderColor={borderColor}
          inputBGColor={inputBGColor}
          placeholder={placeholder || 'Search'}
          defaultValue={inputRef.current?.value || ''}
          onChange={updateRef}
          onKeyUp={e => e.key === 'Enter' && noButton && e.target.blur(e)}
          onBlur={e => noButton && handleSubmit(e)}
        />

        {!noButton && cloneElement(
          <SubmitButton
            theme={theme}
            selectedTheme={selectedTheme}
            text={btnText || 'Search'}
            pill={pill}
            rounded={rounded}
            icon={btnIcon}
            onClick={handleSubmit}
          />
        )}
      </Label>
    </StyledSearch>
  );
};

export { Search };
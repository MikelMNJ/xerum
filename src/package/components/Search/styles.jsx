import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const { neutral, shades, accent } = theme.colors;
const light = 'light';
const height = 3;

export const StyledSearch = styled('div')`
  display: inline-flex;
  width: 100%;
`;

export const Label = styled('label')`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;

  i {
    position: absolute;
    top: 0.9375rem;
    left: 1rem;
    font-size: 1rem;
    color: ${props => hexValid(props.$inputIconColor) || getColor(props, 'grey', neutral.greyWeb)};
  }
`;

export const Icon = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
  height: ${props => props.$height || height}rem;
  width: ${props => props.$height || height}rem;
  color: ${props => {
    const color = hexValid(props.$inputIconColor) || getColor(props, 'onPrimary', neutral.raisinBlack);

    if (props.disabled) return getColor(props, 'lightGrey', neutral.lightGrey);
    return color;
  }};

  i {
    font-size: ${props => props.$inputIconSize || 1}rem;
  }
`;

export const Input = styled('input')`
  margin: 0;
  height: 3rem;
  width: 100%;
  padding: 0.5rem ${props => props.$buttonWidth + 1}rem 0.5rem ${props => props.$noIcon ? 1 : 3}rem;
  font-size: 1rem;
  color: ${props => hexValid(props.$inputTextColor) || getColor(props, 'onPrimary', shades.black)};

  ${props => props.$fontFamily && css`font-family: ${props.$fontFamily};`}

  border-radius: ${props => {
    if (props.$pill) return '3rem';
    if (props.$round) return '0.5rem';
    return `${props.$borderRadius ?? 0.25}rem`;
  }};

  ${props => props.$bottomBorder && !props.$pill && !props.$round && css`
    border: none;
    border-radius: 0;
    border-bottom: ${props => props.$borderSize || 0.0625}rem solid ${props => {
      const color = hexValid(props.$borderColor) || getColor(props, 'grey', shades.black);

      if (props.disabled) return neutral.lightGrey;
      return color + 60;
    }};
  `}

  ${props => !props.$bottomBorder && css`
    border: ${props => props.$borderSize || 0.0625}rem solid ${props => {
      const themeColor = props.$solidFill ? 'accent' : 'grey';
      const fallback = props.$selectedTheme === light ? shades.white : shades.black;
      const color = hexValid(props.$boxColor) || getColor(props, themeColor, fallback);

      if (props.disabled) return neutral.lightGrey;
      return color + 60;
    }};
  `}

  background-color: ${props => {
    const lightTheme = props.$selectedTheme === light;
    if (props.disabled) return neutral.lightGrey;
    return hexValid(props.$inputBGColor) || getColor(props, lightTheme ? 'white' : 'darkGrey', shades.white);
  }};

  &::placeholder {
    color: ${props => {
      const lightTheme = props.$selectedTheme === light;
      const fallback = neutral.lightGrey;
      if (props.disabled) return neutral.greyWeb;
      return hexValid(props.$placeholderColor) || getColor(props, lightTheme ? 'lightGrey' : 'grey', fallback);
    }};
  }

  &:focus {
    ${props => !props.$bottomBorder && css`
      border-color: transparent;
      box-shadow: 0 0 0.5rem ${props => {
        const color = hexValid(props.$focusColor) || getColor(props, 'accent', neutral.davysGrey);

        if (props.disabled) return neutral.lightGrey;
        return color;
      }};

      outline: 0.125rem solid ${props => {
        const color = hexValid(props.$focusColor) || getColor(props, 'accentHover', neutral.greyWeb);

        if (props.disabled) return neutral.lightGrey;
        return color;
      }};
    `}

    ${props => props.$bottomBorder && css`
      outline: none;
      border-bottom: ${props => props.$borderSize || 0.0625}rem solid ${props => {
        return getColor(props, 'accent', accent.brightNavyBlue);
      }};
    `}
  }
`;

export const SubmitButton = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  min-width: 3rem;
  width: fit-content;
  padding: 0 1rem;
  height: 100%;
  color: ${props => {
    if (props.disabled) return shades.white;
    return hexValid(props.$buttonTextColor) || getColor(props, 'primary', shades.white);
  }};
  background-color: ${props => {
    if (props.disabled) return neutral.greyWeb;
    return hexValid(props.$buttonColor) || getColor(props, 'accent', accent.brightNavyBlue);
  }};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;

  ${props => props.$fontFamily && css`font-family: ${props.$fontFamily};`}

  border-radius: ${props => {
    if (props.$pill) return '0 3rem 3rem 0';
    if (props.$round) return '0 0.5rem 0.5rem 0';
    return `0 ${props.$borderRadius || 0.25}rem ${props.$borderRadius || 0.25}rem 0`;
  }};

  i {
    color: inherit;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${props => {
        if (props.disabled) return neutral.greyWeb;
        return hexValid(props.$buttonHoverColor) || getColor(props, 'accentHover', accent.carolinaBlue);
      }};
    }
  }
`;
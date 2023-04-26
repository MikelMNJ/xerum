import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import { Button } from '../Button/Button';
import styled, { css } from 'styled-components';

const colors = theme.colors;
const light = 'light';

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
    color: ${props => hexValid(props.inputIconColor) || getColor(props, 'grey', colors.neutral.greyWeb)};
  }
`;

export const Input = styled('input')`
  margin: 0;
  height: 3rem;
  width: 100%;
  padding: 0.5rem ${props => props.buttonWidth + 1}rem 0.5rem ${props => props.noIcon ? 1 : 3}rem;
  font-size: 1rem;
  color: ${props => hexValid(props.inputTextColor) || getColor(props, 'onPrimary', colors.shades.black)};

  ${props => props.fontFamily && css`font-family: ${props.fontFamily};`}

  border-radius: ${props => {
    if (props.pill) return '3rem';
    if (props.round) return '0.5rem';
    return `${props.borderRadius ?? 0.25}rem`;
  }};

  ${props => props.bottomBorder && !props.pill && !props.round && css`
    border: none;
    border-radius: 0;
    border-bottom: ${props => props.borderSize || 0.0625}rem solid ${props => {
      const color = hexValid(props.borderColor) || getColor(props, 'grey', colors.shades.black);

      if (props.disabled) return colors.neutral.lightGrey;
      return color + 60;
    }};
  `}

  ${props => !props.bottomBorder && css`
    border: ${props => props.borderSize || 0.0625}rem solid ${props => {
      const themeColor = props.solidFill ? 'accent' : 'grey';
      const fallback = props.selectedTheme === light ? colors.shades.white : colors.shades.black;
      const color = hexValid(props.boxColor) || getColor(props, themeColor, fallback);

      if (props.disabled) return colors.neutral.lightGrey;
      return color + 60;
    }};
  `}

  background-color: ${props => {
    const lightTheme = props.selectedTheme === light;
    return hexValid(props.inputBGColor) || getColor(props, lightTheme ? 'white' : 'darkGrey', colors.shades.white);
  }};

  &::placeholder {
    color: ${props => {
      const lightTheme = props.selectedTheme === light;
      const fallback = colors.neutral.lightGrey;
      return hexValid(props.placeholderColor) || getColor(props, lightTheme ? 'lightGrey' : 'grey', fallback);
    }};
  }

  &:focus {
    ${props => !props.bottomBorder && css`
      border-color: transparent;
      box-shadow: 0 0 0.5rem ${props => {
        const color = hexValid(props.focusColor) || getColor(props, 'accent', colors.neutral.davysGrey);

        if (props.disabled) return colors.neutral.lightGrey;
        return color;
      }};

      outline: 0.125rem solid ${props => {
        const color = hexValid(props.focusColor) || getColor(props, 'accentHover', colors.neutral.greyWeb);

        if (props.disabled) return colors.neutral.lightGrey;
        return color;
      }};
    `}

    ${props => props.bottomBorder && css`
      outline: none;
      border-bottom: ${props => props.borderSize || 0.0625}rem solid ${props => {
        return getColor(props, 'accent', colors.accent.brightNavyBlue);
      }};
    `}
  }
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  min-width: 3rem;

  ${props => props.fontFamily && css`font-family: ${props.fontFamily};`}

  border-radius: ${props => {
    if (props.pill) return '0 3rem 3rem 0';
    if (props.round) return '0 0.5rem 0.5rem 0';
    return'0 0.25rem 0.25rem 0';
  }};

  i {
    color: inherit;
  }
`;
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;
const light = 'light';
const heightFallback = 3;

export const FieldLabels = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 0 0.25rem;
`;

export const Optional = styled('span')`
  color: ${props => hexValid(props.optionalColor) || getColor(props, 'lightGrey', colors.shades.black)}
`;

export const FieldGroup = styled('div')`
  position: relative;
`;

export const Icon = styled('i')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.9rem;
  height: ${props => props.height || heightFallback}rem;
  width: ${props => props.height || heightFallback}rem;
  color: ${props => {
    const themeColor = props.solidFill ? 'onAccent' : 'accent';
    const fallback = props.solidFill ? colors.shades.white : colors.shades.black;
    const color = hexValid(props.textColor) || getColor(props, themeColor, fallback);

    if (props.disabled) return colors.neutral.greyWeb;
    return color;
  }};

  ${props => props.onClick && css`
    cursor: pointer;
  `}
`;

export const StyledLabel = styled('label')`
  position: relative;

  input {
    font-size: 1rem;
    width: 100%;
    min-height: ${props => props.height || heightFallback}rem;
    padding: ${props => props.icon
      ? `0.5rem ${(props.height || heightFallback) - 0.05}rem 0.5rem 1rem`
      : '0.5rem 1rem'
    };
    border-radius: ${props => props.borderRadius ?? 0.25}rem;
    background-color: ${props => {
      const themeColor = props.selectedTheme === light ? 'white' : 'darkGrey';
      const color = hexValid(props.inputBGColor) || getColor(props, themeColor, colors.shades.white);

      if (props.disabled) return colors.neutral.lightGrey;
      return color;
    }};

    color: ${props => {
      const themeColor = props.solidFill ? 'onAccent' : 'onPrimary';
      const fallback = props.solidFill ? colors.shades.white : colors.shades.black;
      const color = hexValid(props.textColor) || getColor(props, themeColor, fallback);

      if (props.disabled) return colors.neutral.greyWeb;
      return color;
    }};

    ${props => props.bottomBorder && css`
      border: none;
      border-radius: 0;
      border-bottom: ${props => props.borderSize || 0.0625}rem solid ${props => {
        const color = hexValid(props.boxColor) || getColor(props, 'grey', 'black');

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

    ${props => props.solidFill && css`
    background-color: ${props => {
      const color = hexValid(props.boxColor) || getColor(props, 'accent', colors.shades.black);

      if (props.disabled) return colors.neutral.lightGrey;
      return color;
    }};
  `};

    &:focus {
      ${props => !props.bottomBorder && css`
        outline: none;
        border-color: ${props => {
          const color = hexValid(props.focusColor) || getColor(props, 'accent', colors.neutral.greyWeb);

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

    &::placeholder {
      color: ${props => {
        const lightTheme = props.selectedTheme === light;
        const themeColor = props.solidFill ? 'onAccent' : 'lightGrey';
        const fallback = lightTheme || props.solidFill ? colors.neutral.lightGrey : colors.neutral.davysGrey;
        const color = getColor(props, themeColor, fallback);
        const hasTheme = props.selectedTheme && props.theme;

        if (props.disabled) return colors.neutral.greyWeb + 90;
        return lightTheme && !props.solidFill && hasTheme ? color : color + 80;
      }}
    }
  }
`;
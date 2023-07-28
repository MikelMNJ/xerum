import { getColor, hexValid } from '../../helpers';
import { appConstants, theme } from '../../theme';
import styled, { css } from 'styled-components';

const { themes } = appConstants;
const { neutral, shades, accent } = theme.colors;
const height = 3;
const borderSize = 0.0625;
const borderRadius = 0.5;
const fontSize = 0.875;
const light = themes.light;

export const StyledDatePicker = styled('div')`
  position: relative;
  height: ${props => props.$height ? `${props.$height}rem` : 'fit-content'};
  width: 100%;
`;

export const Label = styled('label')`
  font-size: ${props => props.$labelSize || fontSize}rem;
  color: ${props => hexValid(props.$labelColor) || getColor(props, 'onPrimary', neutral.raisinBlack)};
`;

export const LabelArea = styled('div')`
  width: 100%;
`;

export const LabelText = styled('div')`
  display: inline-flex;
  justify-content: ${props => props.$label ? 'space-between' : 'flex-end'};
  align-items: center;
  width: 100%;
  padding: 0 0.25rem;
`;

export const Optional = styled('span')`
  display: ${props => (props.$visible ? 'inline-flex' : 'none')};
  font-size: ${props => props.$optionalTextSize || fontSize}rem;
  color: ${props => hexValid(props.$optionalTextColor) || getColor(props, 'lightGrey', neutral.lightGrey)};
`;

export const InputArea = styled('div')`
  input {
    position: relative;
    display: flex;
    align-items: center;
    appearance: none;
    height: ${props => props.$height || height}rem;
    width: 100%;
    font-size: ${props => props.$mobileSize || props.$tabletSize || props.$fontSize || 1}rem;
    cursor: pointer;
    border-radius: ${props => props.$borderRadius || borderRadius}rem;
    background-color: ${props => hexValid(props.$bgColor) || getColor(props, 'primary', shades.white)};
    color: ${props => hexValid(props.$textColor) || getColor(props, 'onPrimary', neutral.raisinBlack)};

    ${props => props.$fontFamily && css`font-family: ${props.$fontFamily};`}

    border: ${props => props.$borderSize || borderSize}rem solid ${props => {
      const lightTheme = props.$selectedTheme === light;
      const defaultColor = hexValid(props.$borderColor)
        || getColor(props, props.$menuVisible ? 'accent' : 'lightGrey', neutral.lightGrey);

      return lightTheme ? defaultColor : defaultColor + 50;
    }};

    padding: ${props => {
      if (props.$icon) return `0.5rem ${(props.$height || height) - 0.05}rem 0.5rem 1rem`;
      return '0.5rem 1rem';
    }};

    &:disabled {
      cursor: not-allowed;
      color: ${props => getColor(props, 'grey', neutral.grey)};
      border: none;
      background-color: ${props => {
        const lightTheme = props.$selectedTheme === light;
        return getColor(props, lightTheme ? 'lightGrey' : 'darkGrey', neutral.lightGrey);
      }};
    }

    &:focus {
      inherits: all;
      outline: none;
      border-width: ${props => props.$activeBorderSize || borderSize}rem;
      border-color: ${props => hexValid(props.$activeBorderColor) || getColor(props, 'accent', accent.brightNavyBlue)};

      &::placeholder {
        color: ${props => {
          const lightTheme = props.$selectedTheme === light;
          return hexValid(props.$placeholderColor)
            || getColor(props, lightTheme ? 'lightGrey' : 'grey', neutral.lightGrey);
        }};
      }
    }
  }
`;

export const Icon = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${borderSize}rem;
  right: 0;
  pointer-events: none;
  height: ${props => props.$height || height}rem;
  width: ${props => props.$height || height}rem;
  transform: ${props => props.$menuVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
  color: ${props => {
    const color = hexValid(props.$iconColor) || getColor(props, 'onPrimary', neutral.raisinBlack);

    if (props.disabled) return getColor(props, 'lightGrey', neutral.lightGrey);
    return color;
  }};

  i {
    font-size: ${props => props.$iconSize || fontSize}rem;
  }
`;

export const CalendarArea = styled('div')`
  position: absolute;
  display: ${props => props.$menuVisible ? 'block' : 'none'};
  left: 0;
  z-index: 1;
  padding: 0.5rem;
  width: 100%;
  font-size: ${props => props.$mobileSize || props.$tabletSize || props.$fontSize || 1}rem;
  background-color: ${props => hexValid(props.$bgColor) || getColor(props, 'primary', shades.white)};
  border-radius: ${props => props.$borderRadius || borderRadius}rem;
  cursor: pointer;

  ${props => !props.$top && css`
    top: ${props => {
      const labelHeight = (props.$labelHeight / 16) + props.$labelSpacing;
      const offset = 0.5;

      if (props.$label) {
        return `${(props.$height || height) + labelHeight + offset}rem`;
      }

      return `${(props.$height || height) + offset}rem`;
    }};
  `}

  ${props => props.$top && css`
    bottom: ${props => {
      const labelHeight = (props.$labelHeight / 16) + props.$labelSpacing;
      const offset = 0.5;

      if (props.$label) {
        return `${(props.$height || height) - labelHeight + offset}rem`;
      }

      return `${(props.$height || height) + offset}rem`;
    }};
  `}

  border: ${props => props.$borderSize || 0.0625}rem solid ${props => {
    const lightTheme = props.$selectedTheme === light;
    const defaultColor = getColor(props, 'lightGrey', neutral.lightGrey);

    if (hexValid(props.$borderColor)) return props.$borderColor;
    return lightTheme ? defaultColor : defaultColor + 50;
  }};
`;
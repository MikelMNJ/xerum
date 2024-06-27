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

export const StyledSelect = styled('div')`
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
      cursor: default;
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

export const OptionsArea = styled('div')`
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

export const StyledOptions = styled('div')`
  width: 100%;
  height: 100%;
  min-height: 3rem;
  max-height: ${props => props.$maxHeight || 15.25}rem;
  overflow-y: auto;
  padding-right: ${props => props.$hasOverflow ? 0.5 : 0}rem;

  ::-webkit-scrollbar {
    width: 0.3125rem;
  }
`;

export const Option = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: ${props => props.$height || height}rem;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.$borderRadius ? props.$borderRadius / 2 : borderRadius / 2}rem;
  user-select: none;

  ${props => props.$fontFamily && css`font-family: ${props.$fontFamily};`}

  background-color: ${props => {
    if (props.$disabled) {
      return hexValid(props.$disabledOptionBgColor) || getColor(props, 'primary', neutral.white);
    }

    if (props.$active) {
      return hexValid(props.$activeOptionBgColor) || getColor(props, 'accent', accent.brightNavyBlue);
    }

    return hexValid(props.$bgColor) || getColor(props, 'primary', shades.white);
  }};

  color: ${props => {
    if (props.$disabled) {
      return hexValid(props.$disabledOptionTextColor) || getColor(props, 'grey', neutral.greyWeb) + 75;
    }

    if (props.$active) {
      return hexValid(props.$activeOptionTextColor) || getColor(props, 'onAccent', shades.white);
    }

    return hexValid(props.$optionTextColor) || getColor(props, 'onPrimary', neutral.raisinBlack);
  }};

  @media (hover: hover) {
    &:hover {
      cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
      background-color: ${props => {
        if (props.$active) {
          return hexValid(props.$activeOptionBgHoverColor) || getColor(props, 'accentHover', accent.carolinaBlue);
        }

        return hexValid(props.$optionBgHoverColor) || getColor(props, 'lightGrey', neutral.lightGrey) + 50;
      }};
    }
  }
`;

export const OptionNote = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${props => props.$mobileSize || props.$tabletSize || props.$fontSize || 0.875}rem;
`;

export const NoResults = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.$mobileSize || props.$tabletSize || props.$fontSize || 0.875}rem;
  min-height: inherit;
`;
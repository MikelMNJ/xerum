import { getColor, hexValid } from '../../helpers';
import { appConstants } from '../../theme/appConstants';
import styled, { css } from 'styled-components';

const { themes } = appConstants;
const height = 3;
const borderSize = 0.0625;
const borderRadius = 0.5;
const fontSize = 0.875;
const light = themes.light;

export const StyledField = styled('div')`
  position: relative;
  height: ${props => props.height ? `${props.height}rem` : 'fit-content'};
  width: 100%;
`;

export const Label = styled('label')`
  position: relative;
  font-size: ${props => props.labelSize || fontSize}rem;
  color: ${props => hexValid(props.labelColor) || getColor(props, 'onPrimary')};
`;

export const LabelArea = styled('div')`
  width: 100%;
`;

export const LabelText = styled('div')`
  display: inline-flex;
  justify-content: ${props => props.label ? 'space-between' : 'flex-end'};
  width: 100%;
  padding: 0 0.25rem;
`;

export const Optional = styled('span')`
  display: ${props => (props.visible ? 'inline-flex' : 'none')};
  font-size: ${props => props.optionalTextSize || fontSize}rem;
  color: ${props => hexValid(props.optionalTextColor) || getColor(props, 'lightGrey')};
`;

export const Input = styled('input')`
  position: relative;
  display: flex;
  align-items: center;
  appearance: none;
  height: ${props => props.height || height}rem;
  width: 100%;
  font-size: ${props => props.fontSize || 1}rem;
  border-radius: ${props => props.borderRadius || borderRadius}rem;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'primary')};
  color: ${props => hexValid(props.textColor) || getColor(props, 'onPrimary')};

  ${props => props.fontFamily && css`font-family: ${props.fontFamily};`}

  ${props => !props.bottomBorder && css`
    border: ${props => props.borderSize || borderSize}rem solid ${props => {
      const lightTheme = props.selectedTheme === light;
      const defaultColor = hexValid(props.borderColor) || getColor(props, 'lightGrey');

      return lightTheme ? defaultColor : defaultColor + 50;
    }};
  `}

  ${props => props.bottomBorder && css`
    border: none;
    border-radius: 0;
    border-bottom: ${props => props.borderSize || borderSize}rem solid ${props => {
      const lightTheme = props.selectedTheme === light;
      const defaultColor = hexValid(props.borderColor) || getColor(props, 'lightGrey');

      return lightTheme ? defaultColor : defaultColor + 50;
    }};
  `}

  padding: ${props => {
    if (props.icon) return `0.5rem ${(props.height || height) - 0.05}rem 0.5rem 1rem`;
    return '0.5rem 1rem';
  }};

  &:disabled {
    cursor: not-allowed;
    color: ${props => getColor(props, 'grey')};
    border: none;
    background-color: ${props => {
      const lightTheme = props.selectedTheme === light;
      return getColor(props, lightTheme ? 'lightGrey' : 'darkGrey');
    }};
  }

  &::placeholder {
    color: ${props => {
      const lightTheme = props.selectedTheme === light;
      return getColor(props, lightTheme ? 'lightGrey' : 'grey');
    }};
  }

  &:focus {
    inherits: all;
    outline: none;
    cursor: default;
    border-width: ${props => props.activeBorderSize || borderSize}rem;
    border-color: ${props => hexValid(props.activeBorderColor) || getColor(props, 'accent')};

  }
`;

export const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${borderSize}rem;
  right: 0;
  pointer-events: none;
  height: ${props => props.height || height}rem;
  width: ${props => props.height || height}rem;
  color: ${props => {
    const color = hexValid(props.iconColor) || getColor(props, 'onPrimary');

    if (props.disabled) return getColor(props, 'lightGrey');
    return color;
  }};

  i {
    font-size: ${props => props.iconSize || fontSize}rem;
  }
`;
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;
const light = 'light';

export const StyledLabel = styled('label')`
  display: -webkit-inline-box;
  align-items: center;
  justify-content: center;
  position: relative;
  width: auto;
  min-width: 3rem;
  cursor: pointer;
  user-select: none;

  input {
    // Hides default checkbox
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const Box = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 0.25rem;
  background-color: ${props => {
    const themeColor = props.selectedTheme === light ? 'white' : 'darkGrey';
    const color = hexValid(props.boxColor) || getColor(props, themeColor, colors.white);

    if (props.disabled) return colors.lightGrey;
    return color;
  }};

  border: 0.0625rem solid ${props => {
    const themeColor = props.solidFill ? 'accent' : 'grey';
    const fallback = props.selectedTheme === light ? colors.white : colors.black;
    const color = hexValid(props.boxColor) || getColor(props, themeColor, fallback);

    if (props.disabled) return colors.lightGrey;
    return color + 60;
  }};

  ${props => props.solidFill && css`
    background-color: ${props => {
      const color = hexValid(props.boxColor) || getColor(props, 'accent', colors.black);

      if (props.disabled) return colors.lightGrey;
      return color;
    }};
  `};
`;

export const Check = styled('i')`
  display: ${props => props.visible ? 'block' : 'none'};
  position: relative;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: ${props => {
    const color = hexValid(props.checkColor) || getColor(props, 'accent', colors.black);

    if (props.disabled) return colors.lightGrey;
    return color;
  }};

  ${props => props.solidFill && css`
    color: ${props => {
      const color = hexValid(props.checkColor) || getColor(props, 'onAccent', colors.white);

      if (props.disabled) return colors.grey;
      return color;
    }};
  `};
`;
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;
const light = 'light';

export const FieldLabels = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
`;

export const StyledLabel = styled('label')`
  input {
    width: 100%;
    min-height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: ${props => {
      const themeColor = props.selectedTheme === light ? 'white' : 'darkGrey';
      const color = hexValid(props.boxColor) || getColor(props, themeColor, colors.white);

      if (props.disabled) return colors.lightGrey;
      return color;
    }};

    color: ${props => {
      const themeColor = props.solidFill ? 'onAccent' : 'accent';
      const fallback = props.solidFill ? colors.white : colors.black;
      const color = hexValid(props.textColor) || getColor(props, themeColor, fallback);

      if (props.disabled) return colors.grey;
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

    &:focus {
      border-color: ${colors.transparent};
      box-shadow: 0 0 0.5rem ${props => {
        const color = hexValid(props.boxColor) || getColor(props, 'accent', colors.darkGrey);

        if (props.disabled) return colors.lightGrey;
        return color;
      }};

      outline: 0.125rem solid ${props => {
        const color = hexValid(props.boxColor) || getColor(props, 'accentHover', colors.grey);

        if (props.disabled) return colors.lightGrey;
        return color;
      }};
    }

    &::placeholder {
      color: ${props => {
        const lightTheme = props.selectedTheme === light;
        const themeColor = props.solidFill ? 'onAccent' : 'lightGrey';
        const fallback = lightTheme || props.solidFill ? colors.lightGrey: colors.darkGrey;
        const color = getColor(props, themeColor, fallback);
        const hasTheme = props.selectedTheme && props.theme;

        if (props.disabled) return colors.grey + 90;
        return lightTheme && !props.solidFill && hasTheme ? color : color + 80;
      }}
    }
  }
`;
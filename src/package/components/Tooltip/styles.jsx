import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledTooltip = styled('div')`
  width: fit-content;

  i {
    font-size: 1rem;
    color: ${props => hexValid(props.iconColor) || getColor(props, 'onPrimary', colors.shades.black)};
  }
`;

export const Tip = styled('div').attrs(props => ({
  style: {
    top: `${(props.tipPosition?.top / 16) || 0}rem`,
    left: `${(props.tipPosition?.left / 16) || 0}rem`,
  },
}))`
  position: fixed;
  z-index: 1;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'onPrimary', colors.shades.black)};
  padding: 0.75rem 1rem;
  border-radius: 0.35rem;
  color: ${props => hexValid(props.textColor) || getColor(props, 'primary', colors.shades.white)};
  box-shadow: 0 0.1rem 0.25rem ${props => {
    const lightTheme = props.selectedTheme?.toLowerCase() === 'light';
    return getColor(props, lightTheme ? 'grey' : 'black', colors.neutral.greyWeb);
  }};

  border: ${props => props.borderSize || 0}rem solid ${props => {
    return hexValid(props.borderColor) || getColor(props, 'primary', colors.neutral.lihgtGrey);
  }};

  i {
    color: ${props => hexValid(props.textColor) || getColor(props, 'primary', colors.shades.white)};
  }
`;
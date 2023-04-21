import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledTooltip = styled('div')`
  width: fit-content;

  i {
    font-size: 1rem;
    color: ${props => hexValid(props.color) || getColor(props, 'onPrimary', colors.shades.black)};
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
  padding: 0.5rem;
  border-radius: 0.35rem;
  color: ${props => hexValid(props.color) || getColor(props, 'primary', colors.shades.white)};
  box-shadow: 0 0.1rem 0.25rem ${props => {
    const lightTheme = props.selectedTheme?.toLowerCase() === 'light';
    return getColor(props, lightTheme ? 'grey' : 'black', colors.neutral.greyWeb);
  }};

  i {
    color: ${props => hexValid(props.color) || getColor(props, 'primary', colors.shades.white)};
  }
`;
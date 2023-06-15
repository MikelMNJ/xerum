import { getColor, hexValid } from '../../helpers';
import { appConstants } from '../../theme/appConstants';
import { theme } from '../../theme/theme';
import styled, { css } from 'styled-components';

const { light } = appConstants.themes;
const { colors } = theme;

export const StyledDropdown = styled('div')`
  position: ${props => props.$isMobile ? 'fixed' : 'absolute'};
  z-index: ${props => props.$zIndex || 2};
  display: ${props => props.$visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  width: ${props => {
    if (props.$isMobile) return 'calc(100% - 2rem)';
    if (props.$width) return `${props.$width}rem`;
    return '14rem';
  }};
  top: ${props => props.$posY || 2}rem;
  right: ${props => props.$posX || -0.7}rem;
  border: ${props => props.$borderSize || 0.0625}rem solid ${props => {
    const lightTheme = props.$selectedTheme === light;
    const fallback = getColor(props, lightTheme ? 'lightGrey' : 'black', colors.neutral.lightGrey);
    return hexValid(props.$borderColor) || fallback;
  }};
  border-radius: ${props => props.$borderRadius || 0.25}rem;
  padding: ${props => {
    const horizontalPadding = props.$horizontalPadding || 1.4375;
    const verticalPadding = props.$verticalPadding || 1.4375;

    if (props.$padding) return props.$padding;
    return `${verticalPadding}rem ${horizontalPadding}rem`;
  }};
  background-color: ${props => hexValid(props.$bgColor) || getColor(props, 'primary', colors.shades.white)};
  color: ${props => hexValid(props.$color) || getColor(props, 'onSecondary', colors.shades.black)};
  box-shadow: 0 0.125rem 0.125rem ${props => {
    const lightTheme = props.$selectedTheme === light;
    return hexValid(props.$shadowColor) || getColor(props, lightTheme ? 'lightGrey' : 'black', colors.shades.lightGrey);
  }};

  ${props => props.$minHeight && css`min-height: ${props.$minHeight}rem;`}
  ${props => props.$maxHeight && css`max-height: ${props.$maxHeight}rem;`}
`;
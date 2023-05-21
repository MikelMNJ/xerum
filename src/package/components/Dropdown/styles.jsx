import { getColor, hexValid } from '../../helpers';
import { appConstants } from '../../theme/appConstants';
import { theme } from '../../theme/theme';
import styled from 'styled-components';

const { light } = appConstants.themes;
const { colors } = theme;

export const StyledDropdown = styled('div')`
  position: relative;
  z-index: ${props => props.zIndex || 2};
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: ${props => props.width || 14}rem;
  top: ${props => props.posY || 2}rem;
  right: ${props => props.posX || -0.7}rem;
  border: ${props => props.borderSize || 0.0625}rem solid ${props => {
    const lightTheme = props.selectedTheme === light;
    return hexValid(props.borderColor) || getColor(props, lightTheme ? 'lightGrey' : 'black', colors.neutral.lightGrey);
  }};
  border-radius: ${props => props.borderRadius || 0.25}rem;
  padding: ${props => {
    const horizontalPadding = props.horizontalPadding || 1.4375;
    const verticalPadding = props.verticalPadding || 1.4375;

    if (props.padding) return props.padding;
    return `${verticalPadding}rem ${horizontalPadding}rem`;
  }};
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'primary', colors.shades.white)};
  color: ${props => hexValid(props.color) || getColor(props, 'onSecondary', colors.shades.black)};
  box-shadow: 0 0.125rem 0.125rem ${props => {
    const lightTheme = props.selectedTheme === light;
    return hexValid(props.shadowColor) || getColor(props, lightTheme ? 'lightGrey' : 'black', colors.shades.lightGrey);
  }};
`;
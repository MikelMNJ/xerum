import styled from 'styled-components';
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

export const StyledBadge = styled('div')`
  position: relative;
  width: fit-content;
  cursor: pointer;
`;

export const CountWrapper = styled('div')`
  position: absolute;
  bottom: ${props => {
    const strokeOffset = props.strokeWidth || 0.125;
    const verticalOffset = props.posY || 0.125;
    return `calc(${verticalOffset}rem - ${strokeOffset}rem)`;
  }};

  left: ${props => {
    const iconWidth = props.widths.iconWidth / 16;
    const strokeOffset = props.strokeWidth || 0.125;
    const horizontalOffset = (props.posX || 0.125) - 0.25;
    return `calc(${iconWidth}rem + ${horizontalOffset}rem - ${strokeOffset}rem)`;
  }};

  /* left: ${props => {
    const width = (props.widths.countWidth - props.widths.iconWidth) - ((props.posX * -1) * 16) - 16;
    const strokeOffset = (props.strokeWidth * 16) || 2;

    return `${(width - strokeOffset) / 16}rem`;
  }}; */

  padding: 0.25rem 0.5rem;
  width: fit-content;
  min-width: 1.5rem;
  min-height: 1.5rem;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'accent', colors.black)};
  color: ${props => hexValid(props.textColor) || getColor(props, 'white', colors.white)};
  font-size: ${props => props.textSize || 0.75}rem;
  border-radius: 3rem;
  user-select: none;
  border: ${props =>
    props.strokeWidth || 0.125}rem solid ${props => hexValid(props.strokeColor) || getColor(props, 'primary', colors.white)
  };
`;

export const Counter = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  left: -0.0625rem;
`;

export const IconWrapper = styled('div')`
  i {
    color: ${props => hexValid(props.iconColor) || getColor(props, 'onPrimary', colors.black)};
    font-size: ${props => props.iconSize || 1.5}rem;

    &:hover {
      color: ${props => hexValid(props.iconHoverColor) || getColor(props, 'accentHover', colors.grey)};
    }
  }
`;
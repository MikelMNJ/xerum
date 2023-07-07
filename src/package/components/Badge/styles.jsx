import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const StyledBadge = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 1.5rem;
  cursor: pointer;
`;

export const CountWrapper = styled('div')`
  display: ${props => props.$visible ? 'flex' : 'none'};
  position: ${props => !props.$counterOnly ? 'absolute' : 'relative'};
  z-index: 1;

  ${props => {
    if (!props.$counterOnly) {
      return css`
        bottom: ${props => {
          const strokeOffset = props.$strokeWidth || 0.125;
          const verticalOffset = props.$posY !== undefined ? props.$posY : 0.125;
          return `calc(${verticalOffset}rem - ${strokeOffset}rem)`;
        }};

        left: ${props => {
          const iconWidth = props.$widths.iconWidth / 16;
          const strokeOffset = props.$strokeWidth || 0.125;
          const horizontalOffset = (props.$posX || 0.125) - 0.25;
          return `calc(${iconWidth}rem + ${horizontalOffset}rem - ${strokeOffset}rem)`;
        }};
      `;
    }

    if (props.$counterOnly) {
      return css`bottom: ${props => props.$posY !== undefined ? props.$posY : 0.125}rem;`;
    }
  }}

  padding: 0.25rem 0.5rem;
  width: fit-content;
  min-width: 1.5rem;
  min-height: 1.5rem;
  background-color: ${props => hexValid(props.$bgColor) || getColor(props, 'accent', colors.shades.black)};
  color: ${props => hexValid(props.$textColor) || getColor(props, 'white', colors.shades.white)};
  font-size: ${props => props.$textSize || 0.75}rem;
  border-radius: 3rem;
  user-select: none;
  border: ${props =>
    props.$strokeWidth || 0.125}rem solid ${props => (
      hexValid(props.$strokeColor) || getColor(props, 'primary', colors.shades.white)
    )
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
  display: ${props => props.$visible ? 'flex' : 'none'};
  position: relative;
  top: ${props => props.$iconPosY !== undefined ? props.$iconPosY : 0}rem;

  i {
    color: ${props => hexValid(props.$iconColor) || getColor(props, 'onPrimary', colors.shades.black)};
    font-size: ${props => props.$iconSize || 1.5}rem;

    @media (hover: hover) {
      &:hover {
        color: ${props => hexValid(props.$iconHoverColor) || getColor(props, 'accentHover', colors.neutral.greyWeb)};
      }
    }
  }
`;
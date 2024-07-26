
import styled, { css } from 'styled-components';
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

const setButtonStyle = props => {
  const { $buttonType: type, ...rest } = props || {};

  if (type === 'ghost') {
    return css`
      color: ${props => (
        hexValid(props.$color) || getColor(props, 'accent', colors.shades.black)
      )};
      background-color: transparent;
      border: ${rest.$borderSize ?? 0.0625}rem solid ${props => (
        hexValid(props.$color) || getColor(props, 'accent', colors.shades.black)
      )};

      @media (hover: hover) {
        &:hover {
          border-color: ${props => (
            hexValid(props.$hoverColor)
              || hexValid(props.$color) || getColor(props, 'accentHover', colors.neutral.greyWeb)
          )};

          background-color: ${props => (
            hexValid(props.$hoverColor) || hexValid(props.$color)
          )};

          color: ${props => (
            hexValid(props.$textColor) || getColor(props, 'onAccent', colors.shades.white)
          )};
        }
      }

      &:disabled {
        border: 0.125rem solid #ccc;
        background-color: transparent;
        color: ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey)};
      }
    `;
  }

  if (type === 'transparent') {
    return css`
      color: ${props => (
        hexValid(props.$color) || getColor(props, 'accent', colors.shades.black)
      )};
      background-color: transparent;
      border: none;

      @media (hover: hover) {
        &:hover {
          background-color: transparent;
          color: ${props => (
            hexValid(props.$hoverColor) || getColor(props, 'accentHover', colors.neutral.greyWeb)
          )};
        }
      }

      &:disabled {
        background-color: transparent;
        color: ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey)};
      }
    `;
  }
};

export const StyledButton = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.$column ? 'column' : 'row'};
  position: relative;
  border: none;
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.5rem ${props => props.$noText ? 1 : 2}rem;
  font-size: ${props => props.$textSize ? `${props.$textSize}rem` : '1rem'};
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.$width && css`
    width: ${typeof props.$width === 'string' ? props.$width : `${props.$width}rem`};
    min-width: ${typeof props.$width === 'string' ? props.$width : `${props.$width}rem`};
  `}

  ${props => props.$height && css`
    height: ${typeof props.$height === 'string' ? props.$height : `${props.$height}rem`};
    min-height: ${typeof props.$height === 'string' ? props.$height : `${props.$height}rem`};
  `}

  ${props => props.$padding && css`padding: ${props.$padding};`}
  ${props => props.$fontFamily && css`font-family: ${props.$fontFamily};`}

  border-radius: ${props => {
    if (props.$pill) return '3rem';
    if (props.$round) return '0.5rem';
    return '0.25rem';
  }};

  background-color: ${props => (
    hexValid(props.$color) || getColor(props, 'accent', colors.shades.black)
  )};

  color: ${props => (
    hexValid(props.$textColor) || getColor(props, 'onAccent', colors.shades.white)
  )};

  @media (hover: hover) {
    &:hover {
      background-color: ${props => (
        hexValid(props.$hoverColor) || getColor(props, 'accentHover', colors.neutral.greyWeb)
      )};
      color: ${props => (
        hexValid(props.$textColor) || getColor(props, 'onAccentHover', colors.shades.white)
      )};
    }
  }

  &:disabled {
    border: none;
    background-color: ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey)};
    color: ${props => getColor(props, 'grey', colors.neutral.greyWeb)};
    cursor: not-allowed;
  }

  ${props => setButtonStyle(props)}
`;
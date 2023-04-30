
import styled, { css } from 'styled-components';
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

const setButtonStyle = type => {
  if (type === 'ghost') {
    return css`
      color: ${props => (
        hexValid(props.color) || getColor(props, 'accent', colors.shades.black)
      )};
      background-color: transparent;
      border: 0.0625rem solid ${props => (
        hexValid(props.color) || getColor(props, 'accent', colors.shades.black)
      )};

      @media (hover: hover) {
        &:hover {
          border-color: ${props => (
            hexValid(props.hoverColor)
              || hexValid(props.color) || getColor(props, 'accentHover', colors.neutral.greyWeb)
          )};

          background-color: ${props => (
            hexValid(props.hoverColor) || hexValid(props.color)
          )};

          color: ${props => (
            hexValid(props.textColor) || getColor(props, 'onAccent', colors.shades.white)
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
        hexValid(props.color) || getColor(props, 'accent', colors.shades.black)
      )};
      background-color: transparent;
      border: none;

      @media (hover: hover) {
        &:hover {
          background-color: transparent;
          color: ${props => (
            hexValid(props.hoverColor) || getColor(props, 'accentHover', colors.neutral.greyWeb)
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
  position: relative;
  border: none;
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.5rem ${props => props.noText ? 1 : 2}rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.fontFamily && css`font-family: ${props.fontFamily};`}

  border-radius: ${props => {
    if (props.pill) return '3rem';
    if (props.round) return '0.5rem';
    return '0.25rem';
  }};

  background-color: ${props => (
    hexValid(props.color) || getColor(props, 'accent', colors.shades.black)
  )};

  color: ${props => (
    hexValid(props.textColor) || getColor(props, 'onAccent', colors.shades.white)
  )};

  @media (hover: hover) {
    &:hover {
      background-color: ${props => (
        hexValid(props.hoverColor) || getColor(props, 'accentHover', colors.neutral.greyWeb)
      )};
      color: ${props => (
        hexValid(props.textColor) || getColor(props, 'onAccentHover', colors.shades.white)
      )};
    }
  }

  &:disabled {
    border: none;
    background-color: ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey)};
    color: ${props => getColor(props, 'grey', colors.neutral.greyWeb)};
    cursor: not-allowed;
  }

  ${props => setButtonStyle(props.buttonType)}
`;
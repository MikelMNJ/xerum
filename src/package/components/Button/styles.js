
import styled, { css } from 'styled-components';
import { getColor } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

const setButtonStyle = type => {
  if (type === 'ghost') {
    return css`
      color: ${props => getColor(props, 'accent', colors.black)};
      background-color: ${colors.transparent};
      border: 0.125rem solid ${props => getColor(props, 'accent', colors.black)};

      @media (hover: hover) {
        &:hover {
          background-color: ${props => getColor(props, 'accent', colors.black)};
          color: ${props => getColor(props, 'onAccent', colors.white)};
        }
      }

      &:disabled {
        border: 0.125rem solid #ccc;
        background-color: ${colors.transparent};
        color: ${props => getColor(props, 'lightGrey', colors.lightGrey)};
      }
    `;
  }

  if (type === 'transparent') {
    return css`
      color: ${props => getColor(props, 'accent', colors.black)};
      background-color: ${colors.transparent};
      border: none;

      @media (hover: hover) {
        &:hover {
          background-color: ${props => getColor(props, 'transparent', colors.black)};
          color: ${props => getColor(props, 'accentHover', colors.white)};
        }
      }

      &:disabled {
        background-color: ${colors.transparent};
        color: ${props => getColor(props, 'lightGrey', colors.lightGrey)};
      }
    `;
  }
}

export const StyledButton = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  border-radius: 0.35rem;
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.5rem ${props => props.noText ? 1 : 2}rem;
  background-color: ${props => getColor(props, 'accent', colors.black)};
  color: ${props => getColor(props, 'onAccent', colors.white)};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${props => getColor(props, 'accentHover', colors.grey)};
      color: ${props => getColor(props, 'onAccentHover', colors.white)};
    }
  }

  &:disabled {
    border: none;
    background-color: ${props => getColor(props, 'lightGrey', colors.lightGrey)};
    color: ${props => getColor(props, 'grey', colors.grey)};
    cursor: not-allowed;
  }

  ${props => setButtonStyle(props.btnType)}
`;
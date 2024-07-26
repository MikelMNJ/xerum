import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { getColor, hexValid } from '../../helpers';

const colors = theme.colors;

export const StyledBanner = styled('div')`
  display: ${props => (props.$visible ? 'grid' : 'none')};
  gap: 1rem;
  grid-template-columns: 1fr auto;
  border-radius: 0.35rem;

  ${props => props.$noClose && css`grid-template-columns: 1fr;`}
  ${props => props.$sharp && css`border-radius: 0;`}

  width: 100%;
  min-height: 2rem;
  padding: 1rem;
  color: ${props => (
    hexValid(props.$textColor) || getColor(props, 'onAccent', colors.shades.white)
  )};
  background-color: ${props => (
    hexValid(props.$bgColor) || getColor(props, 'accent', colors.shades.black)
  )};

  ${props => props.$padding && css`
    padding: ${typeof props.$padding === 'string' ? props.$padding : `${props.$padding}rem`};
  `}
`;

export const Message = styled('div')`
  display: flex;
  align-items: center;

  ${props => props.$center && css`justify-content: center;`}
`;

export const Close = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;
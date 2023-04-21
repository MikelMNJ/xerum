import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledNotFound = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
  height: 100%;
  `;

export const Icon = styled('div')`
  font-size: 4rem;
  margin: 0;

  color: ${props => (
    hexValid(props.color) || getColor(props, 'accent', colors.black)
  )};
`;

export const P = styled('p')`
  margin: 0.25rem 0 0 0;
`;
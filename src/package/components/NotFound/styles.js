import { getColor } from '../../helpers';
import { colors } from '../../theme';
import styled from 'styled-components';

export const StyledNotFound = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
  height: 100%;
  color: ${props => getColor(props, 'accent', colors.black)};
`;

export const Icon = styled('div')`
  font-size: 4rem;
  margin: 0;
`;

export const H2 = styled('h2')`
  margin: 0;
`;

export const P = styled('p')`
  margin: 0.25rem 0 0 0;
`;
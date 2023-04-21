import styled from 'styled-components';
import { theme } from '../../theme';
import { getColor } from '../../helpers';

const colors = theme.colors;

export const Flatline = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  i {
    color: ${props => getColor(props, 'error', colors.error.persianRed)};
    font-size: 2rem;
  }
`;
import styled from 'styled-components';
import { colors } from '../../theme';
import { getColor } from '../../helpers';

export const Flatline = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  i {
    color: ${props => getColor(props, 'error', colors.red)};
    font-size: 2rem;
  }
`;
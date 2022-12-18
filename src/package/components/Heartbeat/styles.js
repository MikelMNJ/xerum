import styled from 'styled-components';
import { colors } from '../../theme';

export const Flatline = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  i {
    color: ${colors.red};
    font-size: 2rem;
  }
`;
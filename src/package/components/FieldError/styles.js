import { getColor } from '../../helpers';
import { colors } from '../../theme';
import styled from 'styled-components';

export const StyledError = styled('div')`
  color: ${props => getColor(props, 'error', colors.red)};
`;
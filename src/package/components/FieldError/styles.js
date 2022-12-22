import { getColor } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledError = styled('div')`
  color: ${props => getColor(props, 'error', colors.error)};
`;
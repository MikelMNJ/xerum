import { getColor } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledError = styled('div')`
  color: ${props => getColor(props, 'error', colors.error.persianRed)};
  font-size: 0.875rem;
  padding: 0 ${props => props.indent || 0.5}rem;
`;
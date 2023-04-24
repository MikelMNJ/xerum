import { getColor } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledError = styled('div')`
  color: ${props => getColor(props, 'error', colors.error.persianRed)};
  font-size: 0.9rem;
  padding: 0 ${props => props.borderRadius || 0.5}rem;
`;
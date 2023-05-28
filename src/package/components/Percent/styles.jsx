import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledPercent = styled('div')`
  font-size: ${props => props.$size || 1}rem;
  color: ${props => hexValid(props.$color) || getColor(props, 'onPrimary', colors.shades.black)};
`;
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledPrice = styled('div')`
  color: ${props => hexValid(props.$color) || getColor(props, 'onPrimary', colors.shades.black)};
`;
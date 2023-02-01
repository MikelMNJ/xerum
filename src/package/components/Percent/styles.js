import { getColor, hexValid } from "package/helpers";
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledPercent = styled('div')`
  color: ${props => hexValid(props.color) || getColor(props, 'onPrimary', colors.black)};
`;
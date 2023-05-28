import styled from 'styled-components';
import { hexValid } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

export const StyledStatus = styled('div')`
  display: inline-flex;
  align-items: center;
  margin: 0.25rem;

  i {
    font-size: 0.6rem;
    margin: 0 0.5rem;
    color: ${props => hexValid(props.$color) || colors.neutral.greyWeb};
    transition: color 0.2s ease;
  }
`;
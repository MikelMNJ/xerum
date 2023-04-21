import styled from 'styled-components';

export const StyledSpacer = styled('div')`
  width: ${props => props.across ? props.size || 1 : 0}rem;
  height: ${props => props.across ? 0 : props.size || 1}rem;
`;
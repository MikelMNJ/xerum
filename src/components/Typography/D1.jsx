import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledD1 = styled('h1')`
  font-weight: unset;
  font-family: ${props => props.$weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 4rem;
  margin: 0;
`;

const D1 = withTheme(props => {
  const { children, weight } = props;

  return (
    <StyledD1 $weight={weight}>
      {children}
    </StyledD1>
  );
});

export { D1 };
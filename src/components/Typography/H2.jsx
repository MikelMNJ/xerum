import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledH2 = styled('h2')`
  font-weight: unset;
  font-family: ${props => props.$weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 1.625rem;
  margin: 0;
`;

const H2 = withTheme(props => {
  const { weight, children } = props;

  return (
    <StyledH2 $weight={weight}>
      {children}
    </StyledH2>
  );
});

export { H2 };
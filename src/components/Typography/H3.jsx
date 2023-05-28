import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledH3 = styled('h3')`
  font-weight: unset;
  font-family: ${props => props.$weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 1.375rem;
  margin: 0;
`;

const H3 = withTheme(props => {
  const { weight, children } = props;

  return (
    <StyledH3 $weight={weight}>
      {children}
    </StyledH3>
  );
});

export { H3 };
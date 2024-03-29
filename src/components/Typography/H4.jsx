import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledH4 = styled('h4')`
  font-weight: unset;
  font-family: ${props => props.$weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 1.25rem;
  margin: 0;
`;

const H4 = withTheme(props => {
  const { weight, children } = props;

  return (
    <StyledH4 $weight={weight}>
      {children}
    </StyledH4>
  );
});

export { H4 };
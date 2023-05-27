import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledH6 = styled('h6')`
  font-weight: unset;
  font-family: ${props => props.$weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 0.67rem;
  margin: 0;
`;

const H6 = withTheme(props => {
  const { weight, children } = props;

  return (
    <StyledH6 $weight={weight}>
      {children}
    </StyledH6>
  );
});

export { H6 };
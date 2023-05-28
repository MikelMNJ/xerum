import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledH5 = styled('h5')`
  font-weight: unset;
  font-family: ${props => props.$weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 0.83rem;
  margin: 0;
`;

const H5 = withTheme(props => {
  const { weight, children } = props;

  return (
    <StyledH5 $weight={weight}>
      {children}
    </StyledH5>
  );
});

export { H5 };
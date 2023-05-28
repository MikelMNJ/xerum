import { appConstants } from 'package/theme';
import styled from 'styled-components';

const StyledP = styled('p')`
  margin: 0;
  max-width: ${appConstants.textWidth}rem;
`;

const P = props => {
  const { children } = props;

  return (
    <StyledP>
      {children}
    </StyledP>
  );
};

export { P };
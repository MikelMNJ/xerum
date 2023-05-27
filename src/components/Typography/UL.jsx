import { appConstants } from 'package/theme';
import styled from 'styled-components';

const StyledUL = styled('ul')`
  margin: 0;
  max-width: ${appConstants.textWidth}rem;
`;

const UL = props => {
  const { children } = props;

  return (
    <StyledUL>
      {children}
    </StyledUL>
  );
};

export { UL };
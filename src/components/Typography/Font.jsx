import styled, { withTheme, css } from 'styled-components';
import { hexValid, getFontFamily } from 'helpers';

const StyledFont = styled('span')`
  display: ${props => props.$block ? 'block' : 'inline-flex'};
  font-family: ${props => getFontFamily(props)}, sans-serif;
  font-size: ${props => props.$size || 1}rem;
  ${props => hexValid(props.$color) && css`color: ${props.$color};`}
`;

const Font = withTheme(props => {
  const { weight, size, color, block, children } = props;

  return (
    <StyledFont weight={weight} $size={size} $color={color} $block={block}>
      {children}
    </StyledFont>
  );
});

export { Font };
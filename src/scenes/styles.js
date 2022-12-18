import { createGlobalStyle } from 'styled-components';
import { getColor } from 'package/helpers';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => getColor(props, 'primary')};
    color: ${props => getColor(props, 'onPrimary')};
  }
`;
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from 'store';
import { theme } from 'theme';
import { AppWrapper } from 'pages';
import ReactDOM from 'react-dom/client';

import '@fortawesome/fontawesome-free/css/all.css';
import './fontFaces.css';

const MyApp = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppWrapper />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

const target = document.querySelector('#root');
const root = ReactDOM.createRoot(target);

root.render(MyApp);
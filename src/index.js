import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './scenes/App';

const MyApp = (
  <StrictMode>
    <App />
  </StrictMode>
);

const target = document.querySelector('#root');
const root = ReactDOM.createRoot(target);

root.render(MyApp);

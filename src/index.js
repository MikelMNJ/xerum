import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './scenes/App';
import '@fortawesome/fontawesome-free/css/all.css';

const MyApp = (
  <StrictMode>
    <App />
  </StrictMode>
);

const target = document.querySelector('#root');
const root = ReactDOM.createRoot(target);

root.render(MyApp);

import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import { theme } from 'package/theme';
import {
  Banner,
  Button,
  Spacer,
} from 'package';

const App = () => {
  const [ selectedTheme, setSelectedTheme ] = useState('dark');

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Banner>
        <i className='fa-solid fa-heartbeat' />
        <Spacer across />
        <span>Server is down</span>
      </Banner>

      <Spacer />

      <Button
        theme={theme}
        selectedTheme={selectedTheme}
        text={selectedTheme}
        btnType='ghost'
        icon={selectedTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
        disabled={false}
        callback={handleThemeChange}
      />

      <GlobalStyle theme={theme} selectedTheme={selectedTheme} />
    </div>
  );
}

export default App;

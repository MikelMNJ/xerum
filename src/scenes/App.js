import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import { theme } from 'package/theme';
import { Button, Banner, Spacer } from 'package';

const App = () => {
  const [ selectedTheme, setSelectedTheme ] = useState('light');

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Banner
        theme={theme}
        selectedTheme={selectedTheme}
        text='This is a banner'
      />

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
};

export default App;
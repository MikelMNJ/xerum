import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import { theme } from 'package/theme';
import { Button, Tag } from 'package';

const App = () => {
  const [ selectedTheme, setSelectedTheme ] = useState('light');

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Button
        theme={theme}
        selectedTheme={selectedTheme}
        noText={true}
        buttonType='transparent'
        icon={selectedTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
        disabled={false}
        callback={handleThemeChange}
      />

      <p />

      <Tag
        text={<strong>US Bank, Inc.</strong>}
        removable={true}
        bgColor='#556673'
        closeColor='#333F47'
        callback={() => console.log('Clicked...')}
      />

      <p />

      <Tag
        text={<strong>December 23rd, 2026</strong>}
        bgColor='#556673'
        closeColor='#333F47'
      />

      <p />

      <Tag
        text={<strong>Funded!</strong>}
        bgColor='#50B990'
        closeColor='#333F47'
      />

      <p />

      <Tag
        text={<strong>Auto-spend</strong>}
        removable={true}
        textColor='#556673'
        bgColor='#fafafa'
        borderSize={0.0625}
        borderColor='#C4CDD4'
        closeIcon='fa-solid fa-circle-plus'
        closeColor='#C4CDD4'
        iconLeft={true}
        allClick={true}
        callback={() => console.log('Clicked...')}
      />

      <GlobalStyle theme={theme} selectedTheme={selectedTheme} />
    </div>
  );
};

export default App;
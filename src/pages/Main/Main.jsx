import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { StyledMain, ContentArea } from './styles';
import { appConstants, appActions } from 'modules';
import { Button, Spacer, Font } from 'components';
import { TestForm, categories } from './TestForm';

const { themes } = appConstants;
const { light, dark } = themes;

const expenses = [
  { category: categories[3], amount: 100, checked: true, toggled: true },
  { category: categories[4], amount: 200, checked: false, toggled: true },
];

const Main = props => {
  const { theme, selectedTheme, setTheme } = props;
  const lightTheme = props.selectedTheme === 'light';
  const dispatch = useDispatch();
  const setExpense = useCallback(payload => dispatch(appActions.setExpense(payload)), [ dispatch ]);

  const handleThemeChange = () => {
    setTheme(lightTheme ? dark : light);
  };

  return (
    <StyledMain>
      <ContentArea>
        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          icon={`fa-solid fa-${lightTheme ? 'sun' : 'moon'}`}
          noText={true}
          buttonType='transparent'
          callback={handleThemeChange}
        />

        <Spacer />

        <TestForm />

        <Spacer />

        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          type='button'
          text={<Font weight='medium'>Change to Expense 1</Font>}
          callback={() => setExpense(expenses[0])}
        />

        <Spacer />

        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          type='button'
          text={<Font weight='medium'>Change to Expense 2</Font>}
          callback={() => setExpense(expenses[1])}
        />
      </ContentArea>
    </StyledMain>
  );
};

export { Main };
import { Button } from 'package';

const App = () => {
  return (
    <div id='App'>
      <Button
        text='Get data'
        type='submit'
        btnType='transparent'
        icon='fa-solid fa-pencil'
        callback={() => console.log('Callback.')}
      />
    </div>
  );
}

export default App;

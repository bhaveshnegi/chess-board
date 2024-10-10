import React from 'react';
import ChessBoard from './components/ChessBoard';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ChessBoard />
      </div>
    </Provider>

  )
}

export default App

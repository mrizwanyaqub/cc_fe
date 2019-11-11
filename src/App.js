import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './store';
import CreditCards from './pages/CreditCards';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CreditCards />
      </PersistGate>
    </Provider>
  );
}

export default App;

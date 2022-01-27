import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Prov } from './context/Authentication';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
      <Prov>
            <PersistGate persistor={persistor}>
        <App />

    </PersistGate>
      </Prov>
  </Provider>,
  document.getElementById('root')
);

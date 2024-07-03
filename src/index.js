import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from './App';
import {app} from './firebase.config'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterProvider } from './CounterContext';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Using Context API */}
    {/* <CounterProvider>
      <App />
    </CounterProvider> */}
    {/* Using Context API */}

    {/* Using Redux Toolkit */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* Using Redux Toolkit */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

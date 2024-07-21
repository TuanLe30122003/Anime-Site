import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './context/GlobalContext';
import GlobalStyle from './context/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

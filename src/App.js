import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import ContextProvider from './contexts/ContextProvider';

const App = () => (
  <ContextProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ContextProvider>
);
export default App;

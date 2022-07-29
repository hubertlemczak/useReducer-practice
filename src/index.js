import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RootContextProvider } from './context/StateContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </StrictMode>,
  rootElement
);

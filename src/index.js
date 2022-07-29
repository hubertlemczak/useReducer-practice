import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { MessagesContextProvider } from './context/MessagesContext';
import { UserContextProvider } from './context/UserContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <UserContextProvider>
      <MessagesContextProvider>
        <App />
      </MessagesContextProvider>
    </UserContextProvider>
  </StrictMode>,
  rootElement
);

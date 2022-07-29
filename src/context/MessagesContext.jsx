import { createContext, useContext, useReducer } from 'react';
import messagesReducer from '../reducers/MessagesReducer';

const MessagesContext = createContext();

export const useMessages = () => useContext(MessagesContext);

const intialMessages = [
  { id: 1, text: 'Hello!', user: 'Nicolas' },
  { id: 2, text: 'Hey!', user: 'Sergio' },
  { id: 3, text: 'How are you feeling today?', user: 'Nicolas' },
  { id: 4, text: 'Hot hot, you?', user: 'Sergio' },
  { id: 5, text: 'Cool cool!', user: 'Nicolas' },
];

export const MessagesContextProvider = ({ children }) => {
  const [messages, dispatchMessages] = useReducer(
    messagesReducer,
    intialMessages
  );

  return (
    <MessagesContext.Provider value={{ messages, dispatchMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};

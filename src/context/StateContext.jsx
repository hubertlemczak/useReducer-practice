import { createContext, useContext, useReducer } from 'react';
import { rootReducer } from '../reducers/RootReducer';

export const STATE_ACTIONS = {
  ADD_MESSAGE: 'add-message',
  UPDATE_USER: 'update-user',
};

const StateContext = createContext();
const DispatchContext = createContext();

export const useGlobalState = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);

const intialMessages = [
  { id: 1, text: 'Hello!', user: 'Nicolas' },
  { id: 2, text: 'Hey!', user: 'Sergio' },
  { id: 3, text: 'How are you feeling today?', user: 'Nicolas' },
  { id: 4, text: 'Hot hot, you?', user: 'Sergio' },
  { id: 5, text: 'Cool cool!', user: 'Nicolas' },
];

const initialState = {
  messages: intialMessages,
  user: 'Nicolas',
};

export const RootContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

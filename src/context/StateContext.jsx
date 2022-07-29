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

const initialState = {};

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

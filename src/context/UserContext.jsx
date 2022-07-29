import { createContext, useContext, useReducer } from 'react';
import userReducer from '../reducers/UserReducer';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const intialUser = 'Nicolas';

export const UserContextProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, intialUser);

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

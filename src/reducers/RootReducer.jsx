import messagesReducer from './MessagesReducer';
import userReducer from './UserReducer';

const combineReducers = reducers => (state = {}, action) => {
  const newState = {};
  for (let key in reducers) {
    newState[key] = reducers[key](state[key], action);
  }
  return newState;
};

export const rootReducer = combineReducers({
  messages: messagesReducer,
  user: userReducer,
});

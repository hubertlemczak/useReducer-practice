import messagesReducer from './MessagesReducer';
import userReducer from './UserReducer';

const combineReducers = reducers => {};

export const rootReducer = combineReducers({
  messagesReducer,
  userReducer,
});

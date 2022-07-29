import { STATE_ACTIONS } from '../context/StateContext';

const userReducer = (state, action) => {
  switch (action.type) {
    case STATE_ACTIONS.UPDATE_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer;

import { STATE_ACTIONS } from '../context/StateContext';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case STATE_ACTIONS.ADD_MESSAGE:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          user: action.payload.user,
        },
      ];
    default:
      return state;
  }
};

export default messagesReducer;

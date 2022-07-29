import {
  STATE_ACTIONS,
  useDispatch,
  useGlobalState,
} from '../context/StateContext';

function Title() {
  const { user } = useGlobalState();
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome, {user}!</h1>
      <button
        onClick={() =>
          dispatch({
            type: STATE_ACTIONS.UPDATE_USER,
            payload: { user: user === 'Nicolas' ? 'Hubert' : 'Nicolas' },
          })
        }
      >
        Change user
      </button>
    </>
  );
}

export default Title;

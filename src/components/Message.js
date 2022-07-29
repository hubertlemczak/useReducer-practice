import { useGlobalState } from '../context/StateContext';

function Message({ message }) {
  const { user } = useGlobalState();
  return (
    <li className={`message ${message.user === user ? 'mine' : 'other'}`}>
      {message.text}
    </li>
  );
}

export default Message;

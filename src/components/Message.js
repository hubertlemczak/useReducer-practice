import { useUser } from '../context/UserContext';

function Message({ message }) {
  const { user } = useUser();
  return (
    <li className={`message ${message.user === user ? 'mine' : 'other'}`}>
      {message.text}
    </li>
  );
}

export default Message;

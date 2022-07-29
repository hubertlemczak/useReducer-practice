import { useMessages } from '../context/MessagesContext';
import { useUser } from '../context/UserContext';
import { STATE_ACTIONS } from '../context/StateContext';
import Message from './Message';

function Chat() {
  const { messages, dispatchMessages } = useMessages();
  const { user } = useUser();

  console.log(messages);
  return (
    <div className="chat">
      <ul>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ul>

      <form
        onSubmit={e => {
          e.preventDefault();
          dispatchMessages({
            type: STATE_ACTIONS.ADD_MESSAGE,
            payload: { text: e.target.message.value, user },
          });
          e.target.reset();
        }}
      >
        <input
          className="message-input"
          name="message"
          placeholder="Type a message"
          required
        />
      </form>
    </div>
  );
}

export default Chat;

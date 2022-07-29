import { useUser } from '../context/UserContext';

function Title() {
  const { user } = useUser();
  return <h1>Welcome, {user}!</h1>;
}

export default Title;

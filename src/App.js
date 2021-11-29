import './App.css';
import Container from './components/ContainerMarkup/ContainerMarkup';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/SocialProfile/SocialProfile';
import Table from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './data/friends.json';
import user from './data/user.json';
import data from './data/data.json';
import items from './data/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Table title="Upload statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </Container>
  );
}

export default App;

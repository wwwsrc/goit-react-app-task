import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import Statistic from './statictic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App({ user, statistic, friends, transactions }) {
  return (
    <div>
      <Profile user={user} />
      <Statistic title="File upload" stats={statistic} />
      <FriendList friends={friends} />
      {/* <TransactionHistory transactions={transactions} /> */}
    </div>
  );
}

export default App;

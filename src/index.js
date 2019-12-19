import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import user from './user.json';
import statisticaldata from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
//import Profile from "../src/components/profile/Profile";

ReactDOM.render(
  <App
    user={user}
    statistic={statisticaldata}
    friends={friends}
    transactions={transactions}
  />,
  document.getElementById('root'),
);

// ReactDOM.render(<Profile user={user} />, document.getElementById("rt"));

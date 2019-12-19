import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => {
        return <FriendListItem {...item} key={item.id} />;
      })}
    </ul>
  );
};

export default FriendList;

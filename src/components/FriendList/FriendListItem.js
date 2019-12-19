import React from 'react';
import css from './FriendListItem.module.css';

const Item = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className="avatar" src={avatar} alt="userAvatar" width="84" />
    <p className={css.name}>{name}</p>
  </li>
);

export default Item;

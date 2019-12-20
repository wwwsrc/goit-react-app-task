import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const Item = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className="avatar" src={avatar} alt="userAvatar" width={64} />
    <p className={css.name}>{name}</p>
  </li>
);

export default Item;

Item.defaultProps = {
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D6iUSiBYhLGC_2J4Yp3CwpA1aeOH3A0UEtFCRjnyIXC-o_XR9Q&s',
};

Item.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

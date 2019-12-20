import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  // const {
  //   stats: { followers, views, likes },
  // } = user;
  // console.log(stats);
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="user avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D6iUSiBYhLGC_2J4Yp3CwpA1aeOH3A0UEtFCRjnyIXC-o_XR9Q&s',
  // likes: 'sssss',
  // views: 'dddd',
  // followers: 'sss',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

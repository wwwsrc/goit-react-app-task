import React from "react";
import css from "./Profile.module.css";

const Profile = ({ user }) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }
  } = user;
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

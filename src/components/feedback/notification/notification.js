import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => <h3>{message}</h3>;

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;

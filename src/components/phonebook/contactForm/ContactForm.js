import React from "react";
import PropTypes from "prop-types";

const ContactForm = ({ handleChange, handleSubmit, name, number }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="enter the name"
      ></input>
      <h3>Number</h3>
      <input
        type="number"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="enter phone number"
      ></input>
      <button type="submit">ADD CONTACT</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
export default ContactForm;

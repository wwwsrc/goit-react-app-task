import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(elem => (
        <li key={elem.id} id={elem.id}>
          {elem.name} : {elem.number}
          <button onClick={handleDelete}>delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired
};
export default ContactList;

import React from "react";

const ContactList = ({ contacts, handleDelete, filter }) => {
  return (
    <ul>
      {filter.length === 0
        ? contacts.map(elem => (
            <li key={elem.id} id={elem.id}>
              {elem.name}::{elem.number}
              <button onClick={handleDelete}>del</button>
            </li>
          ))
        : filter.map(elem => (
            <li key={elem.id} id={elem.id}>
              {elem.name}:{elem.number}
              <button onClick={handleDelete}>del</button>
            </li>
          ))}
    </ul>
  );
};

export default ContactList;

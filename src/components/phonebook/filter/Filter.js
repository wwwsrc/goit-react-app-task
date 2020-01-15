import React, { Component } from "react";

const Filter = ({ handleSearch }) => {
  return (
    <>
      <h3>Find user in Phonebook</h3>
      <input
        type="text"
        placeholder="Search contact    "
        onInput={handleSearch}
      />
    </>
  );
};

export default Filter;

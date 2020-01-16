import React from "react";
import PropTypes from "prop-types";

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

Filter.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Filter;

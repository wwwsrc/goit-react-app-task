import React from "react";
import PropTypes from "prop-types";

const Publication = ({ id, title, text }) => {
  //   console.log("publications", { title });
  return (
    <>
      <article key={id}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </>
  );
};

Publication.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Publication;

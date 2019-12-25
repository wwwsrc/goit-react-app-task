import React from "react";

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

export default Publication;

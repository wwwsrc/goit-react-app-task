import React from "react";
import { withRouter, Link } from "react-router-dom";

const MoviesPage = ({
  handleChange,
  value,
  handleSubmit,
  findedFilms,
  getMovieById
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search films"
          onChange={handleChange}
          value={value}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {console.log("here->", findedFilms)}
        {findedFilms.map(item => (
          <li key={item.id} onClick={getMovieById}>
            <Link id={item.id} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(MoviesPage);

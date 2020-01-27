import React from "react";
import { Route, withRouter, Link, Switch } from "react-router-dom";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const MoviesDetailsPage = props => {
  const {
    poster_path,
    title,
    popularity,
    overview,
    genre_ids = [],
    id
  } = props.currentMovie;
  return (
    <div>
      <div>
        {<button onClick={() => props.history.push("/")}>Back to</button>}
        {/* <Link to="/">
        <button>Back it</button>
      </Link> */}
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        ></img>
        <h2>{title}</h2>
        <p>{popularity}</p>
        <h3>overview</h3>
        <p>{overview}</p>
        <h3>genres</h3>
        <ul>
          {genre_ids.map(item => (
            <li> {item}</li>
          ))}
        </ul>
        <div>
          <Link onClick={props.getMovieCast} to="/movies/:movieId/cast">
            Cast
          </Link>
          <br />
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </div>
        <div>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MoviesDetailsPage);

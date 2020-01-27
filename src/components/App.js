import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import MoviesPage from "./page/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MoviesDetailsPage";
import services from "./services";

export default class App extends Component {
  state = {
    movies: [],
    findedMovies: [],
    currentMovie: {},
    cast: [],
    review: [],
    currentMovieId: null,
    value: ""
  };
  componentDidMount() {
    this.getMovies();
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    services.searchMovies(this.state.value).then(data => {
      console.log("data", data);
      this.setState({ findedMovies: data });
    });
  };
  getMovies = () => {
    services.getData().then(data => {
      console.log("data", data);
      this.setState({ movies: data });
    });
  };
  getMovieById = e => {
    const [selectedMovie] = this.state.movies.filter(
      movies => +movies.id === +e.target.id
    );
    console.log(e.target.id);
    this.setState({
      currentMovie: selectedMovie,
      currentMovieId: +e.target.id
    });
    console.log("object", selectedMovie);
  };
  getMovieCast = async () => {
    const cast = await services.getCasts(this.state.currentMovieId);
    this.setState({
      cast
      //shorthand cast:cast
    });
  };
  // componentDidUpdate() {
  //   this.handleSubmit = e => {
  //     e.preventDefault();
  //     services.searchMovies(this.state.value).then(data => {
  //       console.log("data", data);
  //       this.setState({ findedMovies: data });
  //     });
  //   };
  // }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/movies">Movies</Link>
        <br></br>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                movies={this.state.movies}
                getMovieById={this.getMovieById}
              />
            )}
          />
          <Route
            path="/movies/:movieId"
            render={() => (
              <MovieDetailsPage
                currentMovie={this.state.currentMovie}
                getMovieCast={this.getMovieCast}
              />
            )}
          />
          <Route
            path="/movies"
            render={() => (
              <MoviesPage
                findedFilms={this.state.findedMovies}
                handleChange={this.handleChange}
                value={this.state.value}
                handleSubmit={this.handleSubmit}
                getMovieById={this.getMovieById}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

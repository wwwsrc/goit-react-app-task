import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  state = {};

  render() {
    return (
      <ul>
        {this.props.movies.map(item => (
          <li key={item.id} onClick={this.props.getMovieById}>
            <Link id={item.id} to={`/movies/${item.id}`}>
              {/* {"item.is "} */}
              {item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

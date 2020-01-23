import React, { Component } from "react";
import { searchMovies } from "../services/services";
import { NavLink } from "react-router-dom";
import SearchPanel from "./search-panel/SearchPanel";
class MovieSearch extends Component {
  state = {
    query: "",
    searchMovieListResult: []
  };

  async componentDidMount() {
// JSON.parse(localStorage.getItem("movies"))
  }
  async componentDidUpdate(prevProps, prevState) {
    
      if (prevState.query !== this.state.query) {
        searchMovies(this.state.query).then(data =>
          this.setState({ searchMovieListResult: data })
          );
      
        }
        localStorage.setItem("movies", JSON.stringify(this.state.searchMovieListResult))
      
    console.log("SEARCH", this.state);
  }

  handleChange = e => {
    console.log(e.target.value);
  };

  handleSubmit = value => {
    this.setState({ query: value });
    // this.setState({query: ""})
  };
  render() {
    const { searchMovieListResult } = this.state;
    return (
      <>
        <SearchPanel onHandleSubmit={this.handleSubmit} />
        <ul>
          {searchMovieListResult.map(item => (
            <li>
              <NavLink to={`/movie/${item.id}`}>
                <p>{item.title || item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieSearch;

import React, { Component } from "react";
import { searchMovies } from "../services/services";
import { NavLink } from "react-router-dom";
import SearchPanel from "./search-panel/SearchPanel";
import queryString  from "query-string"
class MovieSearch extends Component {
  state = {
    query: "",
    searchMovieListResult: []
  };

  async  componentDidMount() {
  const query = queryString.parse(this.props.location.search).query;
  this.setState({query})
  // await searchMovies(this.state.query).then(data =>
  //   // this.setState({ searchMovieListResult: data, query })
  //   console.log("HEREEEEEE",data)
  // );

  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      searchMovies(this.state.query).then(data =>
        this.setState({ searchMovieListResult: data })
      );
    }
  }

  handleChange = e => {
    console.log(e.target.value);
  };

  handleSubmit = async value => {
    // this.setState({query: ""})

    this.props.history.push({
      ...this.props.location,
      search: `query=${value}`
    });
    this.setState({ query: value });
    //  localStorage.setItem("query", JSON.stringify(value))
  };

  // historyPush = value => {
  //   if (value && value[0] !== ' ') {
  //     this.props.history.push({
  //       pathname: this.props.location.pathname,
  //       search: `query=${value}`,
  //     });
  //   }
  // };
  render() {
    const { searchMovieListResult } = this.state;
    return (
      <>
        <SearchPanel onHandleSubmit={this.handleSubmit} />
        <ul>
          {searchMovieListResult.map(item => (
            <li key={item.id}>
              <NavLink
                to={{
                  pathname: `/movie/${item.id}`,
                  search: ``,
                  hash: "",
                  state: { from: `/movie?query=${this.state.query}` }
                }}
              >
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

import React, { Component } from "react";
import {searchMovies} from "../services/services";
import {NavLink} from "react-router-dom"
class MovieSearch extends Component {
  state = {
    query: "",
    searchMovieListResult: []
  };
  async componentDidMount(){
  await  searchMovies().then(data=> this.setState({searchMovieListResult: data}))
    console.log("SEARCH", this.state.searchMovieListResult)
  }

  handleChange = (e)=> {
    console.log(e.target.value)
    const query = e.target.value;
    this.setState({query})
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    const query = e.target.value;
    this.setState({query})
// this.setState({query: ""})
  }
  render () {
   const {searchMovieListResult} = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search" onChange={this.handleChange}  />
          <button>Go!</button>
        </form>
        <ul>
    {searchMovieListResult.map(item => <li><NavLink to={`/movie/${item.id}`}><p>{item.title || item.name}</p></NavLink></li>)}
        </ul>
      </>
    );
  }
}

export default MovieSearch;

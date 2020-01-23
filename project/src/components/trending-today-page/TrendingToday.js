import React, { Component } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { getMoviesHits, movies } from "../services/services";
import styles from "./TrendingToday.module.css";
import ItemMovie from "../item-movie/ItemMovie";
import Cast from "../item-movie/cast/Cast"
class TrendingToday extends Component {
  state = {
    hits: []
  };
  async componentDidMount() {
    getMoviesHits().then(data => this.setState({ hits: data }));
    // console.log(movies().then(data=> console.log(data)))
  }
  render() {
    console.log("state", this.state);
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {this.state.hits.map(item => (
            <li key={item.id}>
              <NavLink to={`/movie/${item.id}`}>
                <p> {item.title}</p>
              </NavLink>
           
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TrendingToday;

import React, { Component } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { getMoviesHits, movies } from "../services/services";
import styles from "./TrendingToday.module.css";
import ItemMovie from "../item-movie/ItemMovie";
import Cast from "../item-movie/cast/Cast";
class TrendingToday extends Component {
  state = {
    hits: []
  };
  async componentDidMount() {
    getMoviesHits().then(data => this.setState({ hits: data }));
  }
  render() {
    console.log("state", this.state);
    return (
      <>
        <h2 className={styles.title}>Trending today</h2>
        <ul className={styles.list}>
          {this.state.hits.map(item => (
            <li key={item.id}>
              <NavLink
                to={{
                  pathname: `/movie/${item.id}`,
                  search: "",
                  hash: "",
                  state: { from: "/" }
                }}
              className={styles.link} activeClassName={styles.activeLink}>
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

import React, { Component } from "react";
import {
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import {getMoviesHits, movies} from "../services/services";
  import styles from "./TrendingToday.module.css"
class TrendingToday extends Component {
    state = { 
        hits: [],
     }
    async componentDidMount(){
      const movieItems =  getMoviesHits().then(data => this.setState({hits: data}))
      console.log(movies().then(data=> console.log(data)))
    }
  render() {
    return (
      <>
        <h2>Trending today</h2>
      <ul className={styles.movieList}>
    {this.state.hits.map(item=> <NavLink key={item.id} to="/475557">{item.title}</NavLink>)}
        </ul>
      </>
    );
  }
}

export default TrendingToday;

import React, {Component} from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import {getMovieById, getMovie} from "../services/services";
import styles from "./ItemMovie.module.css"
const getIdFromProps = (props)=> props.match.params.movieId
class ItemMoviePage extends Component {
    state = { 
      id: null,
      title: "",
      overview: "",
      userScore: "",
      genres: [],
      score: null,
      path: null
     }
   async  componentDidMount(){
     const id = getIdFromProps(this.props)
  
     getMovieById(id).then(data=>this.setState({
      id: data.id,
      title: data.title,
      overview: data.overview,
      genres: data.genres,
      score: data.score,
      path: data.path
    })) }
    render() {
     const {id, title, overview, genres, score, path} = this.state
     getMovie("89393").then(data => console.log(data))
        return (
            <div className={styles.container}>
        <img src={`https://image.tmdb.org/t/p/w300/${path}`} alt="" className={styles.poster}/>
   <div className={styles.contentWrapper}> <h2>{title}</h2>
        <p>User score: {score} %</p>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <ul>
        {genres.map((item=> <li key={item.id}>{item.name}</li>))}
        </ul></div>
      <div className={styles.additional}>  <h4>Additional information:</h4></div>
          </div>
        );
    }
}


export default ItemMoviePage;

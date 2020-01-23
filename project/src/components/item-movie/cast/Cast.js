import React, { Component } from "react";
import { getActors } from "../../services/services";
import { getIdFromProps } from "../ItemMovie";
import styles from "./Cast.module.css"
class Cast extends Component {
  state = {
    cast: []
  };
  async componentDidMount() {
    const id = getIdFromProps(this.props);
    const data = await getActors(id).then(data =>
      this.setState({ cast: data })
    );
    console.log("HERE", this.state);
  }
  render() {
    return (
      <ul>
        {this.state.cast.map(item => {
          return  (item.profile_path && <li key={item.cast_id}>
            <h3>{item.character}</h3>
            <img src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`} className={styles.img} />
          </li>)
          
       } )}
      </ul>
    );
  }
}

export default Cast;

import React, { Component } from "react";
import { getMoviesHits, movies } from "../services/services";
import TrendingToday from "../trending-today-page/TrendingToday";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    hits: []
  };
  async componentDidMount() {
    const movieItems = getMoviesHits().then(data =>
      this.setState({ hits: data })
    );
    console.log(movies().then(data => console.log(data)));
  }
  render() {
    return (
      <>
          <Route path="/movie"  component={TrendingToday} />
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import { getMoviesHits, movies } from "../services/services";
import TrendingToday from "../trending-today-page/TrendingToday";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../not-found-page/NotFoundPage";
import ItemMovie from "../item-movie/ItemMovie"
import Nav from "../nav/Navigation"
import Navigation from "../nav/Navigation";
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
    
       <Navigation />
       <Switch>
          <Route path="/" exact component={TrendingToday} />
          <Route path={`/movie/:movieId`} component={ItemMovie}/>
          <Route component={NotFoundPage}/></Switch>
       
      </>
    );
  }
}

export default App;

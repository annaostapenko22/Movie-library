import React, { Component } from "react";
import { getMoviesHits, movies } from "../services/services";
import TrendingToday from "../trending-today-page/TrendingToday";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../not-found-page/NotFoundPage";
import ItemMovie from "../item-movie/ItemMovie";
import Navigation from "../nav/Navigation";
import MovieSearch from "../movie-search/MovieSearch";
import Cast from "../item-movie/cast/Cast"
import Reviews from "../item-movie/reviews/Reviews"
class App extends Component {
  state = {
    hits: []
  };
  async componentDidMount() {
    const movieItems = getMoviesHits().then(data =>
      this.setState({ hits: data })
    );
    
  }
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/movie" exact component={TrendingToday} />
          <Route path={`/movie/:movieId`}  component={ItemMovie} />
          <Route path="/movies" component={MovieSearch} />
          <Route component={NotFoundPage} />
        </Switch>
          <Route path={`/movie/:movieId/credits`} component={Cast}/>
          <Route path={`/movie/:movieId/reviews`} component={Reviews}/>
      </>
    );
  }
}

export default App;

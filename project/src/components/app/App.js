import React, { lazy, Suspense, Component } from "react";
import { getMoviesHits } from "../services/services";
import { Route, Switch } from "react-router-dom";
import Navigation from "../nav/Navigation";
import styles from "./App.module.css";
import Loader from "react-loader-spinner"
const TrendingToday = lazy(() =>
  import(
    "../trending-today-page/TrendingToday" /* webpackChunkName: "home-page(trending-today)" */
  )
);

const ItemMovie = lazy(() =>
  import("../item-movie/ItemMovie" /* webpackChunkName: "item-movie" */)
);

const MovieSearch = lazy(() =>
  import("../movie-search/MovieSearch" /* webpackChunkName: "movie-search" */)
);

const NotFoundPage = lazy(() =>
  import(
    "../not-found-page/NotFoundPage" /* webpackChunkName: "not-found-page" */
  )
);
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
      <div className={styles.container}>
        <Navigation />
        <Suspense fallback={ <Loader
         type="Puff"
         color="#00BFFF"
         height={120}
         width={120}
         timeout={3000} //3 secs
className={styles.loader}
      />}>
          <Switch>
            <Route path="/" exact component={TrendingToday} />
            <Route path={`/movie/:movieId`} component={ItemMovie} />
            <Route path="/movie" component={MovieSearch} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Actor from '../Actor/Actor';
import SearchResults from '../SearchResults/SearchResults';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NowPlayingMovies from '../NowPlayingMovies/NowPlayingMovies';
import PopularMovies from '../PopularMovies/PopularMovies';
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:movieId' component={Movie} />
            <Route path='/actor/:actorId' component={Actor} />
            <Route path='/search/:query' component={SearchResults} />
            <Route path='/nowPlaying' component={NowPlayingMovies} />
            <Route path='/popular' component={PopularMovies} />
            <Route path='/topRated' component={TopRatedMovies} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

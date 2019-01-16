import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Actor from '../Actor/Actor';
import SearchResults from '../SearchResults/SearchResults';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NowPlayingMovies from '../NowPlayingMovies/NowPlayingMovies';
import PopularMovies from '../PopularMovies/PopularMovies';
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies';
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './App.scss';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ScrollToTop>
          <Route render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition key={location.key} timeout={1000} classNames={'fade'}>
                <section className="route-section">
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/movie/:movieId' component={Movie} />
                    <Route path='/actor/:actorId' component={Actor} />
                    <Route path='/search/:query' component={SearchResults} />
                    <Route path='/nowPlaying' component={NowPlayingMovies} />
                    <Route path='/popular' component={PopularMovies} />
                    <Route path='/topRated' component={TopRatedMovies} />
                    <Route path='/upcoming' component={UpcomingMovies} />
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </ScrollToTop>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

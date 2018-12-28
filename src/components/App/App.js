import React, { Component } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Actor from '../Actor/Actor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

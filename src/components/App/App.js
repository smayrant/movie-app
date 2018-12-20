import React, { Component } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:movieid' component={Movie} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

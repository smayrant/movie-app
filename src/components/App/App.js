import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Searchfield from '../Searchfield/Searchfield';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Searchfield />
      </div>
    );
  }
}

export default App;

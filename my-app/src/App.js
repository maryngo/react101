import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header.js';
import MyPara from './components/mypara.js';

class App extends Component {
  render() {
    var movies = require("./data/movies.json");

    var my_array = [];

    for (var i=0; i < Object.keys(movies).length;i++){
      my_array.push( <MyPara title={movies[i].title} year={movies[i].year} /> );
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Pee Pee
        </p>
        
        {my_array}

      </div>
    );
  }
}

export default App;

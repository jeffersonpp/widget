import React, { Component } from 'react';
import './App.css';
import Ratings from './Ratings.js';
import logo from './logo-black.jpg';
import dragscroll from 'dragscroll';

class App extends Component {
  render() {
    return (
<div className="container">
	<div className="jumbotron">
		<div className="App-title">
			<img src= {logo} className="App-image" alt="by Jefferson Lopes de Sousa"/>
		</div>
		<div className="App-ratings dragscroll">
			<Ratings ></Ratings>
		</div>
	</div>
</div>
    );
  }
}

export default App;
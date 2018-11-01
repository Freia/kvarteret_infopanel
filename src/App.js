import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function retrieveJSON() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://www.linticket.no/json/Kvarteret/index.php3?StartDato=2018-01-18&Maks=10');
  request.onload = function () {
    var data = JSON.parse(this.response);
    //Parse here
  }

  request.send();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

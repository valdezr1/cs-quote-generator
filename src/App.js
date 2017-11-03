import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './App.css'
import Input from './Components/Input.js'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Jumbotron>
        <h1>CS Quote Generator</h1>
        <h4>...Be inspired by quotes...</h4>
      </Jumbotron>

      <Input/>

      </div>
    );
  }
}

export default App;

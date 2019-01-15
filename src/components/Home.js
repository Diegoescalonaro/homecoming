import React, { Component } from 'react';
import logo from '../images/h.png';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultaccount: ''
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
              Homecoming Global Innovation
          </h2>
          <input placeholder="Introduce tu correo de Telefonica"></input>
        </header>
      </div>
    )
  }
}


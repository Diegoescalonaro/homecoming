import React, { Component } from 'react';
import logo from '../images/h.png';
import './Home.css';
import { Button } from 'reactstrap';

import Portal from './Portal';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultaccount: ''
    }
  }

  async login(correo) {
    this.setState({
      defaultaccount: correo
    })


  }

  render() {
    return (
      <div className="App">

        {!this.state.defaultaccount ?
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
              Homecoming Global Innovation
          </h2>
            <input className="inputCorreo" type="text" placeholder="Introduce tu correo de Telefonica" ref="correo"></input>
            <Button className="button" color="primary" onClick={e => this.login(this.refs.correo.value)}>Acceder</Button>
          </header>
          

          :
          <Portal defaultaccount={this.state.defaultaccount}></Portal>
        }

      </div>
    )
  }
}


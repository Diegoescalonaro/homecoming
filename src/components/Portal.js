import React, { Component } from 'react';
import logo from '../images/h.png';
import './Portal.css';

export default class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultaccount: '',
      balances: ''
    }
  }

  async componentWillMount() {
    this.setState({
      defaultaccount: "await this.getBalances()",
      balances: ".....TODO",
    })
  }

  /* Funciones */
  async getBalances() {

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <body>


        </body>


      </div>
    );
  }
}


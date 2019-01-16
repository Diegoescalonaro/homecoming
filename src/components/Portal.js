import React, { Component } from 'react';
import './Portal.css';

export default class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultaccount: this.props.defaultaccount,
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
        <div>
        <header className="App-header">
        Usuario: {this.props.defaultaccount}
        </header>
        <button></button>
        </div>


    );
  }
}


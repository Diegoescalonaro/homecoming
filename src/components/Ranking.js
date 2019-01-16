import React, { Component } from 'react';
import G from '../images/G.svg';
import H from '../images/H.svg';
import R from '../images/R.svg';
import S from '../images/S.svg';
import './Ranking.css';

export default class Ranking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultaccount: this.props.defaultaccount,
      balances: '',
      group:""
    }
  }

  async componentWillMount() {
    this.setState({
      defaultaccount: "await this.getBalances()",
      balances: ".....TODO",
    })
  }

  /* Funciones */
  async getGroup(name) {
    this.setState({
      group:name
    })

  }




  render() {
    return (
      <div>
        <header className="App-header">
        <h2> Homecoming Global Innovation </h2>
          <div className="img-capas">
            <button className="img-cap" onClick={e => this.getGroup(("Gryffindor"))}><img placeholder="HOOL" src={G}/></button>
            <button className="img-cap" onClick={e => this.getGroup(("Hufflepuff"))}><img src={H} /></button>
            <button className="img-cap" onClick={e => this.getGroup(("Ravenclaw"))}><img src={R} /></button>
            <button className="img-cap" onClick={e => this.getGroup(("Slytherin"))}><img src={S} /></button>
          </div>
          <br></br>
          <h3>{this.state.group}</h3>
        </header>



      </div >


    );
  }
}


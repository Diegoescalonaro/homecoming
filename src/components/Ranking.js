import React, { Component } from 'react';
import G from '../images/G.svg';
import H from '../images/H.svg';
import R from '../images/R.svg';
import S from '../images/S.svg';
import './Ranking.css';

import { Button, Image } from 'reactstrap';
import Group from './Group';


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
    // Mostrar puntuación y nombre de la casa....
    // Obtener info de miembros... 3 primeros en el ranking..
    // Button de ver mas, para ver toda la lista de miembros del grupo.

    this.setState({
      group:name
    })

  }

  render() {
    return (
      <div>
        <header className="App-header">
        <h2> Homecoming Global Innovation </h2>
          
          <div className="div-capas">
            <button className="img-cap" onClick={e => this.getGroup(("Gryffindor"))}><img src={G}/></button>
            <button className="img-cap" onClick={e => this.getGroup(("Hufflepuff"))}><img src={H} /></button>
            <button className="img-cap" onClick={e => this.getGroup(("Ravenclaw"))}><img src={R} /></button>
            <button className="img-cap" onClick={e => this.getGroup(("Slytherin"))}><img src={S} /></button>
          </div>

          <br></br>
          <h3>{this.state.group}</h3>
          <button onClick={e => this.login(this.state.group)}>Ver más</button>
       
          <Group group={this.state.group}/>
       
        </header>



      </div >


    );
  }
}


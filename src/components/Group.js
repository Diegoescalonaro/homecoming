import React, { Component } from 'react';
import G from '../images/G.svg';
import H from '../images/H.svg';
import R from '../images/R.svg';
import S from '../images/S.svg';
import './Group.css';

export default class Group extends Component {
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
      <div className="div-Group">

        <h2> {this.props.group} </h2>






      </div >


    );
  }
}


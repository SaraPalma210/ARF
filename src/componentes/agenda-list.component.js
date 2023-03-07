import React, { Component } from "react";
import AgendaDataService from "../services/agenda.service";

import { DetalleContacto } from "./agenda.component";
import styles from "../styles/TablaContactos.module.css";
import ProgressBar from "./ProgressBar.component";

export class ListaContactos extends Component {
  constructor(props) {
    super(props);
    this.retrieveAgenda = this.retrieveAgenda.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePerson = this.setActivePerson.bind(this);

    this.state = {
      agenda: [],          
      currentAgenda: null,  
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveAgenda();
  }

  retrieveAgenda() {
    AgendaDataService.getAll()
      .then(response => {
        this.setState({
          agenda: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActivePerson(person, index) {
    this.setState({
      currentAgenda: person,
      currentIndex: index
    });
  }

  refreshList() {
    this.retrieveAgenda();
    this.setState({
      currentAgenda: null,
      currentIndex: -1
    });
  }


  render() {
    const { agenda, currentAgenda, currentIndex } = this.state;

    return (
      <div className="container mt-5">
        <div className="list row justify-content-center">

          <div className="col-5 m-ml-5">
            <table className="table table-hover">
              
              <thead className="bg-primary text-white">
                <tr className={styles.puntero_mano} >
                  <th scope="col" >NOMBRE</th>
                  <th scope="col" >APELLIDO</th>
                </tr>
              </thead>
              <tbody className={styles.puntero_mano}>
                {agenda && 
                  agenda.map((persona, index) => (
                    <tr
                      className={
                        "row-group-item " +
                        (index === currentIndex ? "bg-info text-dark" : "")
                      }
                      onClick={() => this.setActivePerson(persona, index)}
                      key={index}
                    >
                      <td scope="row">{persona.firstName} </td>
                      <td>{persona.lastName}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <ProgressBar numero={agenda.length}></ProgressBar>

          </div>
          <div className="col-5 m-md-5">
            <DetalleContacto person={currentAgenda} refresh={this.refreshList}></DetalleContacto>
          </div>
        </div>
        <div className="col-5 m-ml-5">
            
        </div>
      </div>
    );
  }
}
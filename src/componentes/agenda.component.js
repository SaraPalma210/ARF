import React, { Component } from "react";
import AgendaDataService from "../services/agenda.service";
import { Link } from "react-router-dom";

export class DetalleContacto extends Component {

  constructor(props) {
    super(props);
    this.deletePerson = this.deletePerson.bind(this);

    this.state = {
      currentAgenda: null
    };
  }

  componentDidMount() { }

  deletePerson() {
    if (window.confirm("¿Seguro que deseas eliminar el contacto?")) {
      AgendaDataService.delete(this.props.person.id)
        .then(response => {
          console.log(response.data);
          this.props.refresh();
          alert("Contacto borrado correctamente");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    const currentAgenda = this.props.person;
    const f = i => currentAgenda.birthday.charAt(i);

    return (<div>

      {currentAgenda ? (
        <div className="ml-2">
          <h3 className="mb-5 text-info">Contacto</h3>
          <div className="mb-2">
            <label>
              <p><strong>Nombre:</strong></p>
            </label>{" "}
            {currentAgenda.firstName}
          </div>
          <div className="mb-2">
            <label>
            <p><strong>Apellido:</strong></p>
            </label>{" "}
            {currentAgenda.lastName}
          </div>
          <div className="mb-2">
            <label>
              <p><strong>Calle:</strong></p>
            </label>{" "}
            {currentAgenda.street}
          </div>
          <div className="mb-2">
            <label>
              <p><strong>Codigo postal:</strong></p>
            </label>{" "}
            {currentAgenda.postalCode}
          </div>
          <div className="mb-2">
            <label>
              <p><strong>Ciudad:</strong></p>
            </label>{" "}
            {currentAgenda.city}
          </div>
          <div className="mb-5">
            <label>
              <p><strong>Fecha de nacimiento:</strong></p>
            </label>{" "}
            {f(8) + f(9) + "/" + f(5) + f(6) + "/" + f(0) + f(1) + f(2) + f(3)}
          </div>

          <div className="mt-5">
            <button type="button" className="btn btn-danger m-2" id="bt-borrar" onClick={this.deletePerson}>
            <img src="https://cdn-icons-png.flaticon.com/512/58/58326.png" width={30}height={30}></img>
            </button>
            <Link type="button" className="btn btn-success m-2" person={currentAgenda} to={"/agenda/" + currentAgenda.id}>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/edit-icon.png" width={30}height={30}></img>
            </Link>
          </div>

        </div>
      ) : (
        <div>
          <br />
          <p>Selecciona un contacto</p>
        </div>
      )}
    </div>
    );
  }
}



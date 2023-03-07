import React, { Component } from "react";
import AgendaDataService from "../services/agenda.service";
import { Link } from "react-router-dom";

export class AddAgenda extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.createPerson = this.createPerson.bind(this);

        this.state = {
            currentAgenda: {
                firstName: "",
                lastName: "",
                street: "",
                postalCode: "",
                city: "",
                birthday: "",

                submitted: false,
            },
        }
    }

    componentDidMount() { }

    onChangeFirstName(e) {
        const firstName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentAgenda: {
                    ...prevState.currentAgenda,
                    firstName: firstName
                }
            };
        });
    }

    onChangeLastName(e) {
        const lastName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentAgenda: {
                    ...prevState.currentAgenda,
                    lastName: lastName
                }
            };
        });
    }

    onChangeStreet(e) {
        const street = e.target.value;

        this.setState(function (prevState) {
            return {
                currentAgenda: {
                    ...prevState.currentAgenda,
                    street: street
                }
            };
        });
    }

    onChangePostalCode(e) {
        const postalCode = e.target.value;

        this.setState(function (prevState) {
            return {
                currentAgenda: {
                    ...prevState.currentAgenda,
                    postalCode: postalCode
                }
            };
        });
    }

    onChangeCity(e) {
        const city = e.target.value;

        this.setState(function (prevState) {
            return {
                currentAgenda: {
                    ...prevState.currentAgenda,
                    city: city
                }
            };
        });
    }

    onChangeBirthday(e) {
        const birthday = e.target.value;

        this.setState(function (prevState) {
            return {
                currentAgenda: {
                    ...prevState.currentAgenda,
                    birthday: birthday
                }
            };
        });
    }

    createPerson() {

        AgendaDataService.create(
            this.state.currentAgenda
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    submitted: true,
                });
            })          
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const {currentAgenda} = this.state;
        return (
            <div className="submit-form" >
                {this.state.submitted ? (
          <div>
            <h3 className="mb-5 text-success text-center">Nuevo contacto añadido</h3>

          </div>
        ) : (
                    <div className="card-body">

                        <form className="form-group">
                            <p className="h4 text-center py-4">Nuevo Contacto</p>

                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    required
                                    value={currentAgenda.firstName}
                                    onChange={this.onChangeFirstName}
                                name="nombre"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellido">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apellido"
                                    required
                                    value={currentAgenda.lastName}
                                    onChange={this.onChangeLastName}
                                name="apellido"
                                />
                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="nombre">Calle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="calle"
                                    value={currentAgenda.street}
                                    onChange={this.onChangeStreet}
                                name="calle"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="nombre">Codigo postal</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cod"
                                    value={currentAgenda.postalCode}
                                    onChange={this.onChangePostalCode}
                                name="cod"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="nombre">Ciudad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ciudad"
                                    value={currentAgenda.city}
                                    onChange={this.onChangeCity}
                                name="ciudad"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="birthday">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthday"
                                    value={currentAgenda.birthday}
                                    onChange={this.onChangeBirthday}
                                name="birthday"
                                />
                            </div>


                            <div className="text-center py-4 mt-3">
                                <button className="btn btn-success mx-5" type="button" onClick={this.createPerson} to={'/'}>Agregar</button>
                            </div>

                        </form>

                    </div>
                )}
                </div>
        );
    }
}
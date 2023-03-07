import React, { Component} from "react";
import AgendaDataService from "../services/agenda.service";
import { Link } from "react-router-dom";

export class EditaContacto extends Component {

    constructor(props) {
        super(props);
        this.getPerson = this.getPerson.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.updatePerson = this.updatePerson.bind(this);

        this.state = {
            currentAgenda: {
                id: "",
                firstName: "",
                lastName: "",
                street: "",
                postalCode: "",
                city: "",
                birthday: ""
            },
        };
    }

    componentDidMount() {
        this.getPerson(this.props.match.params.id);
    }

    getPerson(id) {
        AgendaDataService.findById(id)
            .then(response => {
                this.setState({
                    currentAgenda: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

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

    updatePerson() {
        AgendaDataService.update(
            this.state.currentAgenda.id,
            this.state.currentAgenda
        )
            .then(response => {
                console.log(response.data);

            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const { currentAgenda } = this.state;
        
        return (
            <div className="list row justify-content-center mt-5" >      
                        <form className="form-group">
                            <div>
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
                            </div>
                            
                            <div className="mt-4">
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
                            </div>

                            <div className="mt-4">
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
                            </div>

                            <div className="mt-4">
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
                            </div>

                            <div className="mt-4">
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
                            </div>

                            <div className="mt-4">
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
                            </div>


                            <div className="text-center py-4 mt-3">
                                <Link className="btn btn-success mx-5" type="button" onClick={this.updatePerson} to={'/'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/768px-White_check.svg.png" width={30}height={30}></img></Link>
                                <Link className="btn btn-danger mx-5" type="button" to={'/agenda'}><img src="https://static.thenounproject.com/png/2045322-200.png" width={30}height={30}></img></Link>
                            </div>
                        </form>
            </div>
        );
    }
}
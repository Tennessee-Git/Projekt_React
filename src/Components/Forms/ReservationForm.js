import React, { Component } from 'react';
import {getShowingById, getRoomById, addReservation} from '../../api/api';
import Room from '../Room/Room';
import './Form.css';

export default class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeat:"",
            showingId: this.props.id,
            movieId: null,
            movieTitle:"",
            roomId:null,
            date:"",
            name:"",
            lastName:"",
            email:"",
            capacity: 0,
            errors:{}
        };
    };

    async componentDidMount()
    {
        const showingData = await getShowingById(this.state.showingId);
        this.setState(
            {
            movieId: showingData.movieId,
            movieTitle: showingData.movieTitle,
            roomId: showingData.roomId,
            date: showingData.date
            });

        const roomData = await getRoomById(showingData.roomId);
        this.setState(
            {
                capacity: roomData.capacity
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    formValidation = () => {
        const {name, lastName, email, selectedSeat} = this.state;
        let isValid = true;
        const errors ={};
        if(name.trim().length < 1 )
        {
            errors.nameLength = "Imię musi mieć co najmniej 1 literę!";
            isValid = false;
        }
        if(lastName.trim().length < 4)
        {
            errors.lastNameLength = "Nazwisko musi mieć co najmniej 4 litery!";
            isValid = false;
        }
        if(!email.includes("@"))
        {
            errors.emailAt = "Email musi zawierać @!";
            isValid = false;
        }
        if(selectedSeat ==="")
        {
            errors.seat = "Nie wybrano miejsca!";
            isValid = false;
        }

        this.setState({errors});
        return isValid;
    }

    handleSubmit = event => {
        const isValid = this.formValidation();
        if(isValid)
        {
            let new_reservation = {
                seansId: this.state.seansId,
                seatCode: this.state.selectedSeat
            }
            console.log(new_reservation);
            addReservation(new_reservation);
        }
    }

    render() {
        const {movieTitle, roomId, date, name, lastName, email, errors, capacity} = this.state;
        return (
            <div>
                <div className="form-wrapper">
                    <div>
                        <h5>Informacje o seansie:</h5>
                        <p>Film: {movieTitle}</p>
                        <p>Sala: {roomId}</p>
                        <p>Data: {date}</p>
                    </div>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-inputs-small">
                            <label>Imię</label>
                            <input
                                id="nameInput"
                                name="name"
                                type="text"
                                placeholder="Podaj imię"
                                value={name}
                                onChange={this.handleChange}
                            />
                            <div className="error-msg">{errors.nameLength}</div>
                        </div>
                        <div className="form-inputs-small">
                            <label>Nazwisko</label>
                            <input
                                id="lastNameInput"
                                name="lastName"
                                type="text"
                                placeholder="Podaj nazwisko"
                                value={lastName}
                                onChange={this.handleChange}
                            />
                            <div className="error-msg">{errors.lastNameLength}</div>
                        </div>
                        <div className="form-inputs-small">
                            <label>E-mail</label>
                            <input
                                id="emailInput"
                                name="email"
                                type="text"
                                placeholder="Podaj email"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <div className="error-msg">{errors.emailAt}</div>
                        </div>
                    </form>
                </div>
                <div>
                    <Room capacity={capacity}/>
                </div>
            </div>
            
        )
    }
}

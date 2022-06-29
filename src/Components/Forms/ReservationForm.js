import React, { Component } from 'react';
import {getShowingById, getRoomById, addReservation, editShowing} from '../../api/api';
import './Form.css';
import PropTypes from "prop-types";
import RoomSeats from './RoomSeats';
import { Link } from 'react-router-dom';

export default class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeat:"",
            showingId: this.props.id,
            showing:{},
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
            showing: {
            movieId: showingData.movieId,
            movieTitle: showingData.movieTitle,
            roomId: showingData.roomId,
            date: showingData.date,
            availableSeats: showingData.availableSeats,
            seatsTaken: showingData.seatsTaken
        }
            });
        const roomData = await getRoomById(showingData.roomId);
        this.setState(
            {
                capacity: roomData.capacity
            });
    }

    setSelectedSeat = (seatCode) =>{
        this.setState({selectedSeat: seatCode});
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
                name: this.state.name,
                lastName: this.state.lastName,
                email: this.state.email,
                seansId: Number(this.state.showingId),
                seatCode: this.state.selectedSeat
            }
            console.log(new_reservation);
            addReservation(new_reservation);
            let newSeatsTaken = this.state.showing.seatsTaken;
            newSeatsTaken.push(this.state.selectedSeat.toString())
            let newCapacity = this.state.capacity - (newSeatsTaken.length + 1)
            let showing2edit = {
                date: this.state.showing.date,
                movieTitle: this.state.showing.movieTitle,
                movieId: this.state.showing.movieId,
                roomId: this.state.showing.roomId,
                id: this.state.showingId,
                availableSeats: newCapacity,
                seatsTaken: newSeatsTaken
            }
            editShowing(showing2edit);
        }
    }

    render() {
        const {showing, name, lastName, email, errors, capacity} = this.state;
        return (
            <div>
                <div className="form-wrapper">
                    <div>
                        <h4>Informacje o seansie:</h4>
                        <p>Film: {showing.movieTitle}</p>
                        <p>Sala: {showing.roomId}</p>
                        <p>Data: {showing.date}</p>
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
                    <RoomSeats setSelectedSeat={this.setSelectedSeat} capacity={capacity} seatsTaken={showing.seatsTaken}/>
                    <div className="error-msg">{errors.seat}</div>
                    <br/>
                <Link to="/seanse" className="fit-link">
                    <button className="AddBtn" onClick={this.handleSubmit}>Rezerwuj</button>
                </Link>
                </div>
            </div>
        )
    }
}

ReservationForm.propTypes = {
    id: PropTypes.number
}
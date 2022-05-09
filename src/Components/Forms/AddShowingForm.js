import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import {addShowing, getMovies, getRooms} from '../../api/api';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';

const customTheme = theme => ({
    ...theme,
    colors:{
        ...theme.colors,
        primary50: "#c8c8e0",
        primary25: "#b3b3c9",
        primary: "#656570"
    }
});

export default class AddShowingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[],
            rooms:[],
            startDate: "",
            startTime: "",
            selectedDate : new Date(),
            isDateSelected: false,
            selectedMovie: "",
            selectedMovieTitle:"",
            selectedRoom: "",
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
    };

    async componentDidMount(){
        const data = await getMovies();
        const data2 = await getRooms();

        this.setState({movies: data, rooms: data2})
    }

    handleMovieChange= event =>{
        this.setState({
            selectedMovie: event.value,
            selectedMovieTitle: event.label
        });
    }

    handleRoomChange = event => {
        this.setState({
            selectedRoom: event.value
        });
    }

    handleDateChange = (date) => {
        this.setState({
            startDate: date
                .toString()
                .split(" ")[4]
                .substring(0, 5),
                selectedDate: date,
                isDateSelected: true
        });
    }

    formValidation = () => {
        const {selectedMovie, selectedRoom} = this.state;
        let isValid = true;
        const errors ={};
        if(selectedMovie === "" )
        {
            errors.selectedMovie = "Musisz wybrać film z listy!";
            isValid = false;
        }
        if(selectedRoom === "")
        {
            errors.selectedRoom = "Musisz wybrać salę z listy!";
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    }

    handleSubmit = event =>{
        const isValid = this.formValidation();
        if(isValid)
        {
            let new_showing = {
                date: moment(this.state.selectedDate).format('DD-MM-YYYY HH:mm'),
                movieId: Number(this.state.selectedMovie),
                roomId: Number(this.state.selectedRoom),
                movieTitle: this.state.selectedMovieTitle,
                availableSeats: this.state.rooms[Number(this.state.selectedRoom)-1].capacity,
                seatsTaken: []
            }
            console.log(new_showing);
            addShowing(new_showing);
            this.props.closeDialog();
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="form-wrapper">
                <h2>Wpisz informacje o seansie</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <label>Film:</label>
                        <Select
                            isSearchable
                            theme={customTheme}
                            options={this.state.movies}
                            getOptionLabel={(option) => `${option.label}`}
                            onChange={this.handleMovieChange}
                            placeholder="Wybierz film"
                        />
                        <div className="error-msg">{errors.selectedMovie}</div>
                    </div>
                    <div className="form-inputs">
                        <label>Sala:</label>
                        <Select
                            isSearchable
                            theme={customTheme}
                            options={this.state.rooms}
                            getOptionLabel={(option) => `${option.label}`}
                            onChange={this.handleRoomChange}
                            placeholder="Wybierz salę"
                        />
                        <div className="error-msg">{errors.selectedRoom}</div>
                    </div>
                    <div className="form-inputs">
                        <label>Data seansu:</label>
                        <DatePicker
                        name="date"
                        selected={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="dd-MM-yyyy HH:mm"
                        minDate={new Date()}
                        />
                    </div>
                </form>
                <br/>
                <button className="AddBtn" onClick={this.handleSubmit}>Dodaj</button>
            </div>
        )
    }
}

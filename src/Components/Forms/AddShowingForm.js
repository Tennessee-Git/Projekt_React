import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';
import {getMovies, getRooms} from '../../api/api';

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
            selectedRoom: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleMovieChange = this.handleMovieChange.bind(this);
    };

    async componentDidMount(){
        const data = await getMovies();
        const data2 = await getRooms();

        this.setState({movies: data, rooms: data2})
        console.log(this.state.movies);
        console.log(this.state.rooms);
    }

    handleMovieChange = event =>{
        this.setState({
            selectedMovie: event.target.value
        });
        console.log(this.state.selectedMovie);
    }

    handleChange = event => {
        this.state({
            [event.target.name]: event.target.value
        });
        console.log("bruh");
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

    handleSubmit = event =>{
 // TO DO: send to json server via axios / use redux ;_;
        console.log("test");
    }

    render() {
        return (
            <div className="form-wrapper">
                <h2>Wpisz informacje o seansie</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor='titleInput'>Film:</label>
                        <Select
                            isClearable
                            theme={customTheme}
                            options={this.state.movies}
                            getOptionLabel={option => `${option.label}`}
                            getOptionValue={option => `${option.value}`}
                            onChange={this.handleChange}
                            isSearchable
                        />
                    </div >
                    <div className="form-inputs">
                        <label htmlFor='roomIdInput'>Sala:</label>
                        <Select
                            isClearable
                            theme={customTheme}
                            getOptionLabel={option => `${option.label}`}
                            getOptionValue={option => `${option.value}`}
                            isSearchable
                            options={this.state.rooms}
                        />
                    </div>
                    <div className="form-inputs">
                        <label>Data seansu:</label>
                        <DatePicker
                        name="date"
                        selected={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="dd.MM.yyyy HH:mm"
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

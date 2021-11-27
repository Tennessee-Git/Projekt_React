import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';
import {editShowing, getMovies, getRooms, getShowingById} from '../../api/api';

const customTheme = theme => ({
    ...theme,
    colors:{
        ...theme.colors,
        primary50: "#c8c8e0",
        primary25: "#b3b3c9",
        primary: "#656570"
    }
});

export default class EditShowingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingId:this.props.id,
            movies:[],
            rooms:[],
            startDate: "",
            startTime: "",
            selectedDate : new Date(),
            isDateSelected: false,
            selectedMovie: "",
            selectedMovieTitle:"",
            selectedRoom: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
    };

    async componentDidMount(){
        const data = await getMovies();
        const data2 = await getRooms();
        const showingData = await getShowingById(this.state.showingId);
        console.log(showingData);
        this.setState({movies: data, rooms: data2, 
            selectedMovie: showingData.movieId, selectedRoom: showingData.roomId, selectedMovieTitle: showingData.movieTitle});
        console.log(this.state);
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

    handleSubmit = event =>{
        let updated_showing = {
            date: this.state.selectedDate,
            movieId: Number(this.state.selectedMovie),
            roomId: Number(this.state.selectedRoom),
            movieTitle: this.state.selectedMovieTitle,
            id:this.state.showingId
        }
        console.log(updated_showing);
        editShowing(updated_showing);
    }

    render() {
        return (
            <div className="form-wrapper">
                <h2>Edytuj informacje o seansie</h2>
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
                    </div >
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
                <button className="AddBtn" onClick={this.handleSubmit}>Edytuj</button>
            </div>
        )
    }
}

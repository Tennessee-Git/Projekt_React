import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';
import axios from 'axios';

const rooms =[
    {
        label: "Sala 1", value:"1"
    },
    {
        label:"Sala 2",value: "2"
    }
];

let movies = [];

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
    };

    // movies = axios.get("http://localhost:3006/filmy")
    //     .then(response => { response.data;console.log(response.data);});

    handleChange = event => {
        this.state({
            [event.target.name]: event.target.value
        });
        console.log("bruh");
    }

    handleDateChange = (date) => {
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        this.setState({
            startDate: dd + "." + mm + "." + yyyy,
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
        //const {movies,GetMovieData} = this.props;
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
                            isSearchable
                            options={movies}

                        />
                    </div >
                    <div className="form-inputs">
                        <label htmlFor='roomIdInput'>Numer sali:</label>
                        <Select
                            isClearable
                            theme={customTheme}
                            getOptionLabel={option => `${option.label}`}
                            getOptionValue={option => `${option.value}`}
                            isSearchable
                            options={rooms}
                            
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

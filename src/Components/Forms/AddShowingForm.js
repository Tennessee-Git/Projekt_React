import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';

const rooms =[
    {
        label: "Sala 1", value:"1"
    },
    {
        label:"Sala 2",value: "2"
    }
];

const movies=[//tu trzeba by było pobrać z ShowAllMovies/GetAllMovies
    {label: "test", value: "test"},
    {label: "bruh", value: "bruh"},
    {
        label: "test2", value: "test2"
    }
];

export default class AddShowingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            selectedMovie: {
                title: ""
            },
            selectedRoom:{
                id: null
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("bruh");
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
                            defaultValue={movies[0]}
                            isSearchable="true"
                            options={movies}
                        />
                        
                    </div >
                    <div className="form-inputs">
                        <label htmlFor='roomIdInput'>Numer sali:</label>
                        <Select 
                            defaultValue={rooms[0]}
                            isSearchable="true"
                            options={rooms}
                        />
                    </div>
                    <div className="form-inputs">
                        <label>Data seansu:</label>
                        {/* <DatePicker 
                        selected={this.state.date}
                        onChange={this.handleChange}
                        showTimeSelect
                        locale="pl"
                        name="date"
                        dateFormat="dd/MM/RRRR hh:mm"
                        /> */}
                    </div>
                </form>
                <br/>
                <button className="AddBtn" onClick={this.handleSubmit}>Dodaj</button>
            </div>
        )
    }
}

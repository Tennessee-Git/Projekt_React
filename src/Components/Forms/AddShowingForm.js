import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';

export default class AddShowingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[//tu trzeba by było pobrać z ShowAllMovies/GetAllMovies
                {
                    title: "test"
                },
                {
                    title: "bruh"
                }
            ],
            rooms:[
                {
                    id: 1
                },
                {
                    id: 2
                }
            ],
            date : new Date()
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
                        <select value={this.state.movies.title} onChange={(event) => this.handleChange(event)}>
                        {this.state.movies.map(movie => (
                            <option value={movie.title}>{movie.title}</option>
                        ))}
                        </select>
                        
                    </div >
                    <div className="form-inputs">
                        <label htmlFor='roomIdInput'>Numer sali:</label>
                        <select value={this.state.rooms.id} onChange={(event) => this.handleChange(event)}>
                            {this.state.rooms.map(room => (
                                <option value={room.id}>{room.id}</option>
                            ))}
                        </select>
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

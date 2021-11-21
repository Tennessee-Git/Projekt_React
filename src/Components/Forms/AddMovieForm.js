import React, { Component } from 'react'
import './Form.css'

export default class AddMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            imageURL: ''
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
                <h2>Wpisz informacje o filmie</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor='titleInput'>Tytuł:</label>
                        <input 
                            id='titleInput'
                            name='title'
                            type='text'
                            placeholder='Podaj tytuł filmu'
                            value = {this.state.title}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor='imageURLInput'>Link do plakatu:</label>
                        <input 
                            id='imageURLInput'
                            name='imageURL'
                            type='text'
                            placeholder='Podaj link do plakatu'
                            value = {this.state.imageURL}
                            onChange={(event) => this.handleChange(event)}/>
                        <img src={this.state.imageURL} width="200px" height="250px" alt="Podgląd plakatu"/>
                    </div>
                </form>
                <br/>
                <button className="AddBtn" onClick={this.handleSubmit}>Dodaj</button>
            </div>
        )
    }
}

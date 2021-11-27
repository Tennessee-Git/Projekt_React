import React, { Component } from 'react'
import { addMovie, getMovieCount } from '../../api/api';
import './Form.css'

export default class AddMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageURL: '',
            length:0,
            value:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async componentDidMount() {
        this.state.value = await getMovieCount() + 1;
        console.log(this.state.value);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event =>{
        let new_movie = {
            title: this.state.title,
            imageURL: this.state.imageURL,
            length: Number(this.state.length),
            label: this.state.title,
            value: this.state.value,
            popularity: 0
        };
        addMovie(new_movie);
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
                    <div className="form-inputs">
                        <label htmlFor='imageURLInput'>Link do plakatu:</label>
                        <input
                            id='imageURLInput'
                            name='imageURL'
                            type='text'
                            placeholder='Podaj link do plakatu'
                            value = {this.state.imageURL}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='lengthInput'>Długość(min):</label>
                        <input
                            id='lengthInput'
                            name='length'
                            type='number'
                            placeholder='Podaj długość filmu'
                            value={this.state.length}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                </form>
                {this.state.imageURL !=='' ?
                        <img src={this.state.imageURL} width="200px" height="250px" alt="Podgląd plakatu"/>
                    : <div></div>}
                <br/>
                <button className="AddBtn" onClick={this.handleSubmit}>Dodaj</button>
            </div>
        )
    }
}

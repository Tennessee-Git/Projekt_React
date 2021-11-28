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
            value:0,
            errors:{}
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

    formValidation = () => {
        const {title, imageURL, length} = this.state;
        let isValid = true;
        const errors ={};
        if(title.trim().length < 5 )
        {
            errors.titleLength = "Tytuł filmu musi mieć co najmniej 5 liter!";
            isValid = false;
        }
        if( length <= 30 )
        {
            errors.movieLength = "Filmy musi trwać co najmniej 30 minut!";
            isValid = false;
        }
        if( imageURL.trim().length < 10)
        {
            errors.imageURLlength = "Link do plakatu musi mieć co najmniej 10 liter!";
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    }

    handleSubmit = event =>{
        const isValid = this.formValidation();
        if(isValid)
        {
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
        
    }

    render() {
        const {title, imageURL, length, errors} = this.state;
        return (
            <div className="form-wrapper">
                <h2>Wpisz informacje o filmie</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <label>Tytuł:</label>
                        <input 
                            id='titleInput'
                            name='title'
                            type='text'
                            placeholder='Podaj tytuł filmu'
                            value = {title}
                            onChange={(event) => this.handleChange(event)}/>
                            <div className="error-msg">{errors.titleLength}</div>
                    </div>
                    <div className="form-inputs">
                        <label>Link do plakatu:</label>
                        <input
                            id='imageURLInput'
                            name='imageURL'
                            type='text'
                            placeholder='Podaj link do plakatu'
                            value = {imageURL}
                            onChange={(event) => this.handleChange(event)}/>
                            <div className="error-msg">{errors.imageURLlength}</div>
                    </div>
                    <div className="form-inputs">
                        <label>Długość(min):</label>
                        <input
                            id='lengthInput'
                            name='length'
                            type='number'
                            placeholder='Podaj długość filmu'
                            value={length}
                            onChange={(event) => this.handleChange(event)}/>
                            <div className="error-msg">{errors.movieLength}</div>
                    </div>
                </form>
                {imageURL !=='' ?
                        <img src={imageURL} width="200px" height="250px" alt="Podgląd plakatu"/>
                    : <div></div>}
                <br/>
                <button className="AddBtn" onClick={this.handleSubmit}>Dodaj</button>
            </div>
        )
    }
}

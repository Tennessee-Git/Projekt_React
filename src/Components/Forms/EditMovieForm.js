import React, { Component } from 'react';
import { editMovie, getMovieById } from '../../api/api';

export default class EditMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageURL: '',
            length:0,
            id:this.props.id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async componentDidMount(){
        const data = await getMovieById(this.state.id);
        this.setState({title: data.title, imageURL: data.imageURL, length:data.length})
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event =>{
        let updated_movie = {
            title: this.state.title,
            imageURL: this.state.imageURL,
            length: this.state.length,
            label: this.state.title,
            value: this.state.id,
            id: this.state.id
        };
        editMovie(updated_movie);
    };

    render() {
        return (
            <div className="form-wrapper">
                <h2>Edytuj informacje o filmie</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor='editTitleInput'>Tytuł:</label>
                        <input 
                            id='edittitleInput'
                            name='title'
                            type='text'
                            placeholder='Podaj nowy tytuł filmu'
                            value = {this.state.title}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='imageURLInput'>Link do plakatu:</label>
                        <input
                            id='imageURLInput'
                            name='imageURL'
                            type='text'
                            placeholder='Podaj nowy link do plakatu'
                            value = {this.state.imageURL}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='lengthInput'>Długość(min):</label>
                        <input
                            id='lengthInput'
                            name='length'
                            type='number'
                            placeholder='Podaj nową długość filmu'
                            value={this.state.length}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                </form>
                <button className="AddBtn" onClick={this.handleSubmit}>Edytuj</button>
            </div>
        )
    }
}

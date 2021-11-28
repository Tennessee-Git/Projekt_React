import React, { Component } from 'react';
import { editMovie, getMovieById } from '../../api/api';

export default class EditMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageURL: '',
            length:null,
            id:this.props.id,
            oldTitle:"",
            oldimageURL:"",
            oldlength:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async componentDidMount(){
        const data = await getMovieById(this.state.id);
        this.setState({oldTitle: data.title, oldimageURL: data.imageURL, oldlength:data.length})
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
        if(this.state.title !=="" && this.state.imageURL !== "" && this.state.length !==null)
        {
            const isValid = this.formValidation();
            if(isValid){
                let updated_movie = {
                    title: this.state.title,
                    imageURL: this.state.imageURL,
                    length: this.state.length,
                    label: this.state.title,
                    value: this.state.id,
                    id: this.state.id
                };
                editMovie(updated_movie);
            }
        }
        else {if(this.state.title ==="" && this.state.imageURL === "" && this.state.length ===null)
        {
            let updated_movie = {
                title: this.state.oldTitle,
                imageURL: this.state.oldimageURL,
                length: this.state.oldlength,
                label: this.state.oldTitle,
                value: this.state.id,
                id: this.state.id
            };
            editMovie(updated_movie);
        }}
    };

    render() {
        return (
            <div className="form-wrapper">
                <h2>Edytuj informacje o filmie</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <label>Aktualny tytuł: {this.state.oldTitle}</label>
                        <input 
                            id='edittitleInput'
                            name='title'
                            type='text'
                            placeholder='Podaj nowy tytuł filmu'
                            value = {this.state.title}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-inputs">
                        <label>Link do plakatu:</label>
                        <input
                            id='imageURLInput'
                            name='imageURL'
                            type='text'
                            placeholder='Podaj nowy link do plakatu'
                            value = {this.state.imageURL}
                            onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="inline-images">
                        <img src={this.state.oldimageURL} width="200px" height="250px" className="inline-image" alt="Podgląd plakatu"/>
                        <img src={this.state.imageURL} width="200px" height="250px" className="inline-image" alt="Podgląd nowego plakatu"/>
                    </div>
                    <div className="form-inputs">
                        <label>Aktualna długość(min): {this.state.oldlength}</label>
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

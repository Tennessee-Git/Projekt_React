import React, { Component } from 'react'
import { editRoom, getRoomById } from '../../api/api';
import { Link } from 'react-router-dom';
import './Form.css'

export default class EditRoomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            value: 0,
            label:"",
            capacity:0,
            newCapacity:0,
            errors:{},
            isValid:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async componentDidMount() {
        const data = await getRoomById(this.state.id);
        this.setState({
            value: data.value,
            label: data.label,
            capacity: data.capacity});
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

        this.setState({isValid:this.formValidation()})
    }

    formValidation = () => {
        const {newCapacity} = this.state;
        let isValid = true;
        let errors = {};
        if( newCapacity < 30) {
          errors.minCapacity = "Sala musi mieć minimum 30 miejsc!";
          isValid = false;
        }
        if( newCapacity > 150) {
          errors.maxCapacity = "Sala może mieć maksimum 150 miejsc!"
        }
    
        this.setState({errors});
        return isValid;
      }

    handleSubmit = event => {
        if(this.state.newCapacity !== 0) {
            this.state.isValid.setState(this.formValidation());
            if(this.state.isValid) {
                let updated_room = {
                    id: this.state.id,
                    value: this.state.value,
                    capacity: this.state.newCapacity,
                    label: this.state.label
                }
                editRoom(updated_room);
            }
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className='form-wrapper'>
            <h2>Edytuj informacje o sali</h2>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <div className='form-inputs'>
                    <label>Pojemność:</label>
                    <input 
                    required
                    id="newCapacity"
                    name='newCapacity'
                    type='number'
                    placeholder='Podaj pojemność sali'
                    onChange={(event) => this.handleChange(event)}/>
                    <div className="error-msg">{errors.minCapacity}</div>
                    <div className="error-msg">{errors.maxCapacity}</div>
                </div>
            </form>
            <Link to={'/sale'}>
                <button className="AddBtn" onClick={this.handleSubmit}>
                    Edytuj
                </button>
            </Link>
            
      </div>
        )
    }
}

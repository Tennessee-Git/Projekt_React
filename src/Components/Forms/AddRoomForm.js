import React, { Component } from 'react'
import { addRoom, getRoomCount } from '../../api/api';
import './Form.css'

export default class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 0,
        label:"",
        capacity:0,
        errors:{}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  async componentDidMount() {
    this.state.value = await getRoomCount() + 1;
    console.log(this.state.value);
  }

  formValidation = () => {
    const {capacity} = this.state;
    let isValid = true;
    const errors = {};
    if( capacity < 30) {
      errors.minCapacity = "Sala musi mieć minimum 30 miejsc!";
      isValid = false;
    }
    if( capacity > 150) {
      errors.maxCapacity = "Sala może mieć maksimum 150 miejsc!"
    }

    this.setState({errors});
    return isValid;
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

  handleSubmit = event => {
    const isValid = this.formValidation();
    if (isValid) {
      let new_room = {
        label: "Sala " + String(this.state.value),
        value: this.state.value,
        capacity: Number(this.state.capacity)
      }
      addRoom(new_room);
      this.props.closeDialog();
      // this.props.addRoom(this.state.value);
    }
  }

  render() {
    return (
      <div className='form-wrapper'>
        <h2>Podaj pojemność nowej sali</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div className='form-inputs'>
            <label>Pojemność:</label>
            <input 
              id="capacity"
              name='capacity'
              type='number'
              placeholder='Podaj pojemność sali'
              onChange={(event) => this.handleChange(event)}
              />
          </div>
        </form>
        <button className="AddBtn" onClick={this.handleSubmit}>Dodaj</button>
      </div>
    )
  }
}

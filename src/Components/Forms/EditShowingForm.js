import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import {
  editShowing,
  getMovies,
  getRooms,
  getShowingById,
} from "../../api/api";
import moment from "moment";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import { Link } from "react-router-dom";

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary50: "#c8c8e0",
    primary25: "#b3b3c9",
    primary: "#656570",
  },
});

export default class EditShowingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingId: this.props.id,
      movies: [],
      rooms: [],
      startDate: "",
      startTime: "",
      selectedDate: "",
      isDateSelected: false,
      selectedMovie: "",
      selectedMovieTitle: "",
      selectedRoom: "",
      oldMovieId: 0,
      oldMovieTitle: "",
      oldRoom: "",
      oldDate: "",
      availableSeats: null,
      seatsTaken: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  async componentDidMount() {
    const data = await getMovies();
    const data2 = await getRooms();
    const showingData = await getShowingById(this.state.showingId);
    this.setState({
      movies: data,
      rooms: data2,
      selectedMovie: showingData.movieId,
      selectedRoom: showingData.roomId,
      selectedMovieTitle: showingData.movieTitle,
      oldMovieId: showingData.movieId,
      oldMovieTitle: showingData.movieTitle,
      oldRoom: showingData.roomId,
      oldDate: showingData.date,
      availableSeats: showingData.availableSeats,
      seatsTaken: showingData.seatsTaken,
    });
  }

  handleMovieChange = (event) => {
    this.setState({
      selectedMovie: event.value,
      selectedMovieTitle: event.label,
    });
  };

  handleRoomChange = (event) => {
    this.setState({
      selectedRoom: event.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date.toString().split(" ")[4].substring(0, 5),
      selectedDate: date,
      isDateSelected: true,
    });
  };

  handleSubmit = (event) => {
    if (
      this.state.selectedMovieTitle === this.state.oldMovieTitle &&
      this.state.selectedRoom === this.state.oldRoom &&
      this.state.isDateSelected === false
    ) {
      let updated_showing = {
        date: this.state.oldDate,
        movieId: this.state.oldMovieId,
        roomId: this.state.oldRoom,
        movieTitle: this.state.oldMovieTitle,
        id: this.state.showingId,
        availableSeats: this.state.availableSeats,
        seatsTaken: this.state.seatsTaken,
      };
      console.log(updated_showing);
      editShowing(updated_showing);
    } else {
      if (
        this.state.selectedDate !== "Invalid date" &&
        this.state.selectedMovie !== "" &&
        this.state.selectedRoom !== ""
      ) {
        let updated_showing = {
          date: moment(this.state.selectedDate).format("DD-MM-YYYY HH:mm"),
          movieId: Number(this.state.selectedMovie),
          roomId: Number(this.state.selectedRoom),
          movieTitle: this.state.selectedMovieTitle,
          id: this.state.showingId,
          availableSeats: this.state.availableSeats,
          seatsTaken: this.state.seatsTaken,
        };
        console.log(updated_showing);
        editShowing(updated_showing);
      }
    }
  };

  render() {
    return (
      <div className="form-wrapper">
        <h2>Edytuj informacje o seansie</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <label>Aktualny film: {this.state.oldMovieTitle}</label>
            <Select
              isSearchable
              theme={customTheme}
              options={this.state.movies}
              getOptionLabel={(option) => `${option.label}`}
              onChange={this.handleMovieChange}
              placeholder="Wybierz nowy film"
            />
          </div>
          <div className="form-inputs">
            <label>Aktualna sala: {this.state.oldRoom}</label>
            <Select
              isSearchable
              theme={customTheme}
              options={this.state.rooms}
              getOptionLabel={(option) => `${option.label}`}
              onChange={this.handleRoomChange}
              placeholder="Wybierz nową salę"
            />
          </div>
          <div className="form-inputs">
            <label>Aktualna data seansu: {this.state.oldDate}</label>
            <DatePicker
              name="date"
              selected={this.state.selectedDate}
              onChange={this.handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="dd.MM.yyyy HH:mm"
              minDate={new Date()}
              placeholderText="Wybierz nową datę"
            />
          </div>
        </form>
        <br />
        <Link to="/seanse" className="fit-link">
          <button className="AddBtn" onClick={this.handleSubmit}>
            Edytuj
          </button>
        </Link>
      </div>
    );
  }
}

EditShowingForm.propTypes = {
  id: PropTypes.number,
};

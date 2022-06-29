import React from 'react'
import { Link } from 'react-router-dom'
import './ShowingStyle.css'
import PropTypes from "prop-types"

const ShowingDetails = ({id, date, movieTitle, roomId, availableSeats, deleteFunc}) => {
    return (
        <div className="showing-card">
            <div className="showing-details">
                <div className="showing-date">{date}</div>
                <div className="showing-title">{movieTitle.toUpperCase()}</div>
                <div className="showing-room">Sala {roomId} </div>
                <div className="showing-seats">{availableSeats} wolnych miejsc</div>
            </div>
            <div className="overlay">
                <div className="inner-card-controls">
                    <Link to={`/edytujSeans/${id}`}>
                    <button className="ctrl-btn" >
                            <i className="far fa-edit"></i>
                        </button>
                    </Link>
                    <Link to={`/rezerwuj/${id}`}>
                    <button className="ctrl-btn ctrl-btn-small">
                            Rezerwuj <i className="fas fa-ticket-alt"></i>
                        </button>
                    </Link>
                    <button className="ctrl-btn" onClick={() => {
                    console.log(id)
                    deleteFunc(id)}}>
                    <i className="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

ShowingDetails.propTypes = {
    date: PropTypes.string.isRequired,
    movieTitle: PropTypes.string,
    roomId: PropTypes.number,
    availableSeats: PropTypes.number
}

export default ShowingDetails

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import '../Movie Components/MovieDetails.css'

const ShowingControls = ({id}) => {
    return (
        <div className="inner-card-controls">
            <>
            <Link to={`/edytujSeans/${id}`}>
            <button className="ctrl-btn" >
                    <i className="far fa-edit"></i>
                </button>
            </Link>
                <button className="ctrl-btn">
                    Rezerwuj <i className="fas fa-ticket-alt"></i>
                </button>
            </>
        </div>
    )
}

ShowingControls.propTypes = {
    id: PropTypes.number.isRequired
}

export default ShowingControls

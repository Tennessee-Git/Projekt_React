import React from 'react'
import './MovieStyle.css'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const MovieDetails = ({id, title, imageURL, deleteFunc}) => {
    return (
        <div className="movie-card">
            <img src={imageURL} alt={`${title} Poster`}/>
            <div className='movie-title'>{title}</div>
            <div className="overlay">
                <div className="inner-card-controls">
                    <Link to={`/edytujFilm/${id}`}>
                        <button className="ctrl-btn">
                            <i className="far fa-edit"></i>
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

export default MovieDetails

MovieDetails.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    imageURL: PropTypes.string,
}

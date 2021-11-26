import React from 'react'
import './MovieDetails.css'
import { MovieControls } from './MovieControls'
import PropTypes from "prop-types"

const MovieDetails = ({id, title, imageURL}) => {
    return (
        <div className="movie-card">
            <img src={imageURL} alt={`${title} Poster`}/>
            <div className="overlay">
            <MovieControls title={title} id={id} />
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

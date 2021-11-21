import React from 'react'
import './MovieDetails.css'
import { MovieControls } from './MovieControls'

const MovieDetails = ({movie}) => {
    return (
        <div className="movie-card">
            <img src={movie.imageURL} alt={`${movie.title} Poster`}/>
            <div className="overlay">
            <MovieControls movie={movie} />
            </div>
        </div>
    )
}

export default MovieDetails

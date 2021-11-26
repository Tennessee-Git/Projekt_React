import React from "react"
import MovieDetails from "./MovieDetails"
import PropTypes from "prop-types"

const MovieList = ({movies}) => {
    return (
        <div className="card-container"> 
                    <div className="movie-grid">
                    {movies.map((movie,key) =>
                        <MovieDetails key={movie.id} id={movie.id} title={movie.title} imageURL={movie.imageURL}/>)}
                    </div>
                </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieList

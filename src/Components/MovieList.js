import React from "react"
import MovieDetails from "./MovieDetails"

const MovieList = ({movies}) => {
    
    return (
        <div>
            {movies.map(movie => (
                <MovieDetails title={movie.title} imageURL ={movie.imageURL}/>
            ))}
        </div>
    )
}

export default MovieList

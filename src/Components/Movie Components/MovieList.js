import React from "react"
import MovieDetails from "./MovieDetails"
import { useSelector } from 'react-redux';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    return (
        <div>
            {movies.map(movie => (
                <MovieDetails title={movie.title} imageURL ={movie.imageURL}/>
            ))}
        </div>
    )
}

export default MovieList

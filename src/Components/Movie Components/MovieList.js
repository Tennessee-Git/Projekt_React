import React from 'react';
import MovieDetails from "./MovieDetails"

const MovieList = ({movies, deleteFunc}) => {
    return (
        <div className="card-container"> 
            <div className="custom-grid">
                {movies.map((movie,key) =>
                    <MovieDetails
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        imageURL={movie.imageURL}
                        deleteFunc={deleteFunc}/>)
                }
            </div>
        </div>
    )
}

export default MovieList

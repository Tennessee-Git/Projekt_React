import React, {useState, useEffect} from 'react';
import MovieDetails from "./MovieDetails"
import { getMovies, deleteMovie } from '../../api/api'

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const getAllMovies = async () => {
          const allMovies = await getMovies();
          if(allMovies) setMovies(allMovies);
        };
        getAllMovies();
      },[]);

    const deleteFunction = (id) => {
        deleteMovie(id);
        setMovies(movies.filter((i)=>(i.id !== id)));
    }

    return (
        <div className="card-container"> 
            <div className="custom-grid">
                {movies.map((movie,key) =>
                    <MovieDetails
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        imageURL={movie.imageURL}
                        deleteFunc={deleteFunction}/>)
                }
            </div>
        </div>
    )
}

export default MovieList

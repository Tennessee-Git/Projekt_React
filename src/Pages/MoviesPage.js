import React from 'react';
import MovieList from '../Components/MovieList';
import {useState, useEffect} from 'react';
import api from '../api/api'

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    const retrieveMovies = async () => {
        const response = await api.get("/filmy");
        return response.data;
      }

      useEffect(() =>{
        const getAllMovies = async () => {
          const allMovies = await retrieveMovies();
          if(allMovies) setMovies(allMovies);
        };
        getAllMovies();
      },[]);

    return (
        <div>
            <MovieList movies={movies}/>
        </div>
    )
}

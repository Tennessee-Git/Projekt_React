import React, {useState, useEffect} from 'react';
import AddMovieForm from '../Components/Forms/AddMovieForm';
import Popup from '../Components/Popup/Popup';
import {getMovies} from '../api/api';
import './Page.css';
import MovieList from '../Components/Movie Components/MovieList';

function MoviesPage() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [movies, setMovies] = useState([]);

      useEffect(() =>{
        const getAllMovies = async () => {
          const allMovies = await getMovies();
          if(allMovies) setMovies(allMovies);
        };
        getAllMovies();
      },[]);

    return (
        <div>
            <div>
                <div className="heading">
                    <br/>
                    <h1>Lista filmów: <button className="AddBtn"
                     onClick={() => setButtonPopup(true)}>Dodaj film</button></h1>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <AddMovieForm/>
                    </Popup>
                </div>
                <MovieList movies={movies}/>
            </div>
        </div>
    )
}

export default MoviesPage

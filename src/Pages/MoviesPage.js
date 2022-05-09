import React, {useState, useEffect} from 'react';
import AddMovieForm from '../Components/Forms/AddMovieForm';
import {getMovies} from '../api/api';
import './Page.css';
import MovieList from '../Components/Movie Components/MovieList';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function MoviesPage() {
    const [open, setOpen] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSuccessfulClose = () => {
      setOpen(false);
      getAllMovies();
    };

    const getAllMovies = async () => {
      const allMovies = await getMovies();
      if(allMovies) setMovies(allMovies);
    };

      useEffect(() =>{
        getAllMovies();
      },[]);

    return (
        <div>
            <div>
                <div className="heading">
                    <br/>
                    <h1>Lista filmów: <button className="AddBtn"
                     onClick={handleClickOpen}>Dodaj film</button></h1>
                    
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      maxWidth='600px'
                    >
                      <DialogContent>
                      <AddMovieForm closeDialog={handleSuccessfulClose}/>
                      </DialogContent>
                    </Dialog>

                </div>
                <MovieList movies={movies}/>
            </div>
        </div>
    )
}

export default MoviesPage

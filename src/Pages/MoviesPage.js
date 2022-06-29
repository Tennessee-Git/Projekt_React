import React, {useState} from 'react';
import AddMovieForm from '../Components/Forms/AddMovieForm';
import './Page.css';
import MovieList from '../Components/Movie Components/MovieList';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function MoviesPage() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
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
                <AddMovieForm closeDialog={handleClose}/>
                </DialogContent>
              </Dialog>

          </div>
          <MovieList/>
        </div>
    )
}

export default MoviesPage

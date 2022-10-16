import React, { useState, useEffect } from "react";
import AddMovieForm from "../Components/Forms/AddMovieForm";
import "./Page.css";
import MovieList from "../Components/Movie Components/MovieList";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { getMovies, deleteMovie } from "../api/api";

function MoviesPage() {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const allMovies = await getMovies();
      if (allMovies) setMovies(allMovies);
    };
    getAllMovies();
  }, []);

  const deleteFunction = (id) => {
    deleteMovie(id);
    setMovies(movies.filter((i) => i.id !== id));
  };

  const addFunction = (movie) => {
    setMovies((movies) => [...movies, movie]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="heading">
        <h1>Lista filmów: </h1>
        <button className="AddBtn" onClick={handleClickOpen}>
          Dodaj film
        </button>
        <Dialog open={open} onClose={handleClose} maxWidth="600px">
          <DialogContent>
            <AddMovieForm closeDialog={handleClose} addFunction={addFunction} />
          </DialogContent>
        </Dialog>
      </div>
      <MovieList movies={movies} deleteFunc={deleteFunction} />
    </div>
  );
}

export default MoviesPage;

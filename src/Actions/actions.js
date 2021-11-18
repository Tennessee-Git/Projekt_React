import axios from 'axios';

export const SHOW_ALL_MOVIES = 'SHOW_ALL_MOVIES'
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const ADD_MOVIE = 'ADD_MOVIE'
export const EDIT_MOVIE = 'EDIT_MOVIE'
export const SHOW_ALL_SHOWINGS_TODAY = 'SHOW_ALL_SHOWINGS_TODAY'
export const ADD_SHOWING = 'ADD_SHOWING'
export const EDIT_SHOWING = 'EDIT_SHOWING'

const getMovieData = () => {
    return axios("http://localhost:3006/filmy").then(res => res.data).catch(error => console.error('Error: ', error));
};

export const showAllMovies = () => (dispatch) =>{
getMovieData().then(data=>{
dispatch(showAllMoviesAction(data));
}).catch(error => {throw(error)});
};


export const showAllMoviesAction = (data) =>({
    type: SHOW_ALL_MOVIES,
    payload: data
});

export const selectMovieAction = (movie) => ({
        type: SELECT_MOVIE,
        movie
});

export const addMovieAction = (new_movie) => ({
    type: ADD_MOVIE,
    new_movie
});

export const editMovieAction = (updated_movie) => ({
    type: EDIT_MOVIE,
    updated_movie
})
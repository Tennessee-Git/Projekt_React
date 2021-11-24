export const SHOW_ALL_MOVIES = 'SHOW_ALL_MOVIES'
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'
export const EDIT_MOVIE = 'EDIT_MOVIE'
export const SHOW_ALL_SHOWINGS_TODAY = 'SHOW_ALL_SHOWINGS_TODAY'
export const ADD_SHOWING = 'ADD_SHOWING'
export const EDIT_SHOWING = 'EDIT_SHOWING'

export const showAllMoviesAction = (data) =>({
    type: SHOW_ALL_MOVIES,
    payload: data
});

export const selectMovieAction = id  => ({
        type: SELECT_MOVIE,
        payload: id
});

export const addMovieAction = (new_movie) => ({
    type: ADD_MOVIE,
    payload: new_movie
});

export const removeMovieAction = id => ({
    type: REMOVE_MOVIE,
    payload: id
});

export const editMovieAction = id => ({
    type: EDIT_MOVIE,
    payload:{
        id
    }
})

// export function showAllMovies(){
//     const request = axios({
//         method: 'get',
//         url: 'http://localhost:3006/filmy'
//     });
//     return {
//         type: SHOW_ALL_MOVIES,
//         payload: request.movies
//     };
// }
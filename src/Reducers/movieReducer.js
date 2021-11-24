import axios from "axios";
import { getMovieData, getRoomsData } from "../api/api";

const INITIAL_STATE = {
    moviesList: [getMovieData()],
    rooms:[getRoomsData()]
}

export default function moviesReducer (state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_ALL_MOVIES':
            console.log('SHOW_ALL_MOVIES');
            return { ...state, moviesList: moviesList };
        case 'ADD_MOVIE':
            let new_movie = action.payload;
            let oldState = state.moviesList;
            oldState.push(new_movie);
             return { ...state, moviesList: oldState };
        case 'REMOVE_MOVIE':
             return state.filter(movie => movie.id !== action.payload.id);
        case 'EDIT_MOVIE':
            return;
        default:
            return state;
    }
};
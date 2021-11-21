import axios from "axios";
import { getAllMovies, getAllRooms } from "../Actions/actions";

const INITIAL_STATE = {
    moviesList: [getAllMovies()],
    rooms:[getAllRooms()]
}

export default function moviesReducer (state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_ALL_MOVIES':
            return [
                ...state
             ];
        case "ADD_MOVIE":
             return {
                 ...state,
                 moviesList: state.moviesList.filter(
                    (movie) => movie.id !== action.payload.id
                 )
                 };
        case 'REMOVE_MOVIE':
             return state.filter(movie => movie.id !== action.payload.id);
        case 'EDIT_MOVIE':
            return;
        default:
            return state;
    }
};
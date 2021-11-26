const INITIAL_STATE = {
    moviesList: [],
    rooms:[],
    loaded: false
}

export default function moviesReducer (state=INITIAL_STATE, action) {
    let new_state;
    switch(action.type) {
        case 'SHOW_ALL_MOVIES':
            console.log('SHOW_ALL_MOVIES');
            new_state = Object.assign({},state);
            new_state.moviesList = action.movies;
            new_state.loaded = true;
            return new_state;
        case 'ADD_MOVIE':
            console.log("ADD_MOVIE");
            return Object.assign({}, state, {moviesList:[...state.moviesList, action.new_movie]})
        case 'REMOVE_MOVIE':
             return;
        case 'EDIT_MOVIE':
            return;
        default:
            return state;
    }
};
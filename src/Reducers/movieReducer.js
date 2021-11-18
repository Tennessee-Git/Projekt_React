const INITIAL_STATE = {
    moviesList: []
}

export default function moviesReducer (state=INITIAL_STATE, action) {
    let new_state;
    switch(action.type) {
        case 'SHOW_ALL_MOVIES':
        return {
                moviesList: action.payload
        }
        return new_state;
        default:
            return state;
    }
};
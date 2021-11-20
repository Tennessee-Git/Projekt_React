const INITIAL_STATE = {
    moviesList: []
}

export default function moviesReducer (state=INITIAL_STATE, action) {
    let new_state;
    switch(action.type) {
        // case 'SHOW_ALL_MOVIES':
        //     return [
        //         ...state
        //      ];
        // case 'ADD_MOVIE':
        //      return [
        //          ...state,
        //          {
        //              id: state.moviesList.length+1,
        //              title: action.payload.title,
        //              imageURL: action.payload.imageURL
        //          }
        //      ];
        // case 'REMOVE_MOVIE':
        //      return state.filter(movie => movie.id !== action.payload.id);
        // case 'EDIT_MOVIE':
        //     return;
        default:
            return state;
    }
};
import {combineReducers} from 'redux';
import moviesReducer from './movieReducer';

const allReducers = combineReducers({
    movies: moviesReducer
});

export default allReducers;
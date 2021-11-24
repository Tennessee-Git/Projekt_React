import axios from 'axios';
import { addMovieAction, showAllMoviesAction } from '../Actions/actions';
axios.defaults.baseURL = 'http://localhost:3006/';

//Związane z filmami

export const showAllMovies = () => (dispatch) =>{
    return axios.get('filmy')
        .then(res => {
            dispatch(showAllMoviesAction(res));
        }).catch((error) => console.error('Error: ', error));
};

export const getMovieById = (id) => {
    return axios.get('filmy/' + id)
        .then((res) => {
            return res.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

export const addMovie = (new_item) => {
    return axios.post("/filmy", new_item)
        .then((res) => {
            dispatch(addMovieAction())
        })
        .catch((error) => {
            return error;
        });
}

export const editMovie = (id, body) => {
    return axios.put("/filmy/" + id, body)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
}

export const deleteMovie = (id) => {
    return axios.delete("/filmy/" + id)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
}

//Związane z salami

export const getRoomsData = () => {
    return axios.get('sale')
        .then((res) => {
            return res.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}
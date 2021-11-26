import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3006';

//Związane z filmami

export const getMovies = async () => { //działa
    const response = await axios.get("/filmy");
    return response.data;
  }

export const addMovie = (new_movie) => { //działa
    const request = {
        ...new_movie
    }
    return axios.post("/filmy", request)
       .then(response => {
          console.log("Add: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_movie);
          else console.log(err);
          return err.response;
       });
 }

 export const deleteMovie = (id) => { //działa
    return axios.delete("/filmy/" + id)
        .then((response) => {
            console.log("Delete: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const editMovie = (movie) => {
    return axios.put(`/filmy/${movie.id}`, movie)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const getMovieById = (id) => {
    return axios.get('filmy/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

//Związane z seansami

export const getShowings = async () => {
    const response = await axios.get("/seanse");
    return response.data;
}

export const editShowing = (showing) => {
    return axios.put(`/seanse/${showing.id}`, showing)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Związane z salami

export const getRooms = async () => {
    const response = await axios.get("/sale");
    return response.data;
}

export const getRoomById = (id) => {
    return axios.get('sale/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}
import axios from 'axios';
import moment from 'moment';
axios.defaults.baseURL = 'http://localhost:3006';

//Związane z filmami

export const getMovies = async () => { //działa
    const response = await axios.get("/filmy");
    return response.data;
  }

export const getMovieCount = async () => { //działa
    const response = await axios.get("/filmy");
    let data = response.data;
    console.log(data);
    let number = data.length;
    console.log(number);
    return number;
}

export const updatePopularity = (id) => { // Nie będzie potrzebne
    let movie = getMovieById(id);
    let current= movie.popularity;
    movie.popularity = current + 1;
    editMovie(movie);
}

export const addMovie = (new_movie) => { //działa
    const request = {
        ...new_movie
    }
    return axios.post("/filmy", request)
       .then(response => {
          console.log("Add film: ", response);
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

export const editMovie = (movie) => { //działa
    movie.value = movie.id;
    return axios.put(`/filmy/${movie.id}`, movie)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const getMovieById = (id) => { //działa
    return axios.get('filmy/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

//Związane z seansami

export const getShowings = async () => { //działa
    const response = await axios.get("/seanse");
    return response.data;
}

export const addShowing = (new_showing) => { //działa
    const request = {
        ...new_showing
    }
    return axios.post("/seanse", request)
       .then(response => {
          console.log("Add seans: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_showing);
          else console.log(err);
          return err.response;
       });
 }

 export const deleteShowings =  (MovieId) => { // nie działa
    const response = axios.get("/seanse");
    let showings = response.data;
      showings.forEach(showing => {
          if(showing.movieId === MovieId)
          axios.delete("/seanse/" + showing.id);
      });
 }

export const editShowing = (showing) => { //działa
    return axios.put(`/seanse/${showing.id}`, showing)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const getShowingById = async (id) => { //działa
    return axios.get('seanse/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

export const getShowingsNow = async () => { // działa
    const response = await axios.get("/seanse");
    let showingsNow = response.data;
    const now = moment().format('DD-MM-YYYY HH:mm');
    const output =[];
    showingsNow.forEach(showing => {
        if(moment(showing.date).isSameOrAfter(now))
            output.push(showing);
    });
    output.sort((a,b) => ((moment(a.date)).isSameOrAfter(moment(b.date))) ? 1 : -1);
    return output;
}

//Związane z salami

export const getRooms = async () => { //działa
    const response = await axios.get("/sale");
    return response.data;
}

export const getRoomById = (id) => { //działa
    return axios.get('sale/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

//Związane z rezerwacjami
export const addReservation = (new_reservation) => { //działa
    const request = {
        ...new_reservation
    }
    return axios.post("/rezerwacje", request)
       .then(response => {
          console.log("Add reservation: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_reservation);
          else console.log(err);
          return err.response;
       });
 }
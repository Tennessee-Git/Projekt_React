import axios from 'axios';
import moment from 'moment';
axios.defaults.baseURL = 'http://localhost:3006';

//Związane z filmami

export const getMovies = async () => {
    const response = await axios.get("/movies");
    return response.data;
  }

export const getMovieCount = async () => {
    const response = await axios.get("/movies");
    let data = response.data;
    console.log(data);
    let number = data.length;
    console.log(number);
    return number;
}

export const addMovie = (new_movie) => {
    const request = {
        ...new_movie
    }
    return axios.post("/movies", request)
       .then(response => {
          console.log("Add film: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_movie);
          else console.log(err);
          return err.response;
       });
 }

export const deleteMovie = (id) => {
    return axios.delete("/movies/" + id)
        .then((response) => {
            console.log("Delete: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const editMovie = (movie) => {
    movie.value = movie.id;
    return axios.put(`/movies/${movie.id}`, movie)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const getMovieById = (id) => {
    return axios.get('movies/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

//Związane z seansami

export const getShowings = async () => {
    const response = await axios.get("/showings");
    return response.data;
}

export const addShowing = (new_showing) => {
    const request = {
        ...new_showing
    }
    return axios.post("/showings", request)
       .then(response => {
          console.log("Add showing: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_showing);
          else console.log(err);
          return err.response;
       });
 }

export const editShowing = (showing) => {
    return axios.put(`/showings/${showing.id}`, showing)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const getShowingById = async (id) => {
    return axios.get('showings/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

export const getShowingsNow = async () => {
    const response = await axios.get("/showings");
    let showingsNow = response.data;
    const now = moment().format('DD-MM-YYYY HH:mm');
    let output =[];
    showingsNow.forEach(showing => {
        if(moment(showing.date).isSameOrAfter(now))
            output.push(showing);
    });
    output.sort((a,b) => ((moment(a.date)).isSameOrAfter(moment(b.date))) ? 1 : -1);
    return output;
}

export const deleteShowing = (id) => {
    return axios.delete("/showings/" + id)
        .then((response) => {
            console.log("Delete: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Związane z salami

export const getRooms = async () => {
    const response = await axios.get("/rooms");
    return response.data;
}

export const getRoomById = (id) => {
    return axios.get('rooms/' + id)
        .then((response) => {
            return response.data;})
        .catch((error) => {
            console.error('Error: ', error);
            return error;
        });
}

export const getRoomCount = async () => {
    const response = await axios.get("/rooms");
    let data = response.data;
    console.log(data);
    let number = data.length;
    console.log(number);
    return number;
}

export const addRoom = (new_room) => {
    const request = {
        ...new_room
    }
    return axios.post("/rooms", request)
       .then(response => {
          console.log("Add room: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_room);
          else console.log(err);
          return err.response;
       });
}

export const editRoom = (room) => {
    return axios.put(`/rooms/${room.id}`, room)
        .then((response) => {
            console.log("Edit: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const deleteRoom = (id) => {
    return axios.delete("/rooms/" + id)
        .then((response) => {
            console.log("Delete: ", response);
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Związane z rezerwacjami
export const addReservation = (new_reservation) => {
    const request = {
        ...new_reservation
    }
    return axios.post("/reservations", request)
       .then(response => {
          console.log("Add reservation: ", response);
          return response;
       }).catch(err => {
          if (err.response.status === 304) console.log("Duplicate data -", new_reservation);
          else console.log(err);
          return err.response;
       });
 }
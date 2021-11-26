import './MovieDetails.css'
import {deleteMovie} from '../../api/api'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

export const MovieControls = ({title, id}) => {
    return (
        <div className="inner-card-controls">
          <>
          <Link to={`/edytujFilm/${id}`}>
          <button className="ctrl-btn">
              <i className="far fa-edit"></i>
            </button>
          </Link>
          
            <button className="ctrl-btn" onClick={() => {
              console.log(id)
              deleteMovie(id)}}>
              <i className="far fa-trash-alt"></i>
            </button>
            </>
            <div className="movie-title">{title}</div>
        </div>
    )
}

MovieControls.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
}
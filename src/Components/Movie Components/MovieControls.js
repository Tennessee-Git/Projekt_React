//import { editMovieAction, removeMovieAction } from "../Actions/actions"
import './MovieDetails.css'

export const MovieControls = ({movie}) => {
    return (
        <div className="inner-card-controls">
          <>
          <button className="ctrl-btn" >
              <i className="far fa-edit"></i>{/* tu dodać onClick={editMovieAction(movie)} */}
            </button>
            <button className="ctrl-btn">
              <i className="far fa-trash-alt"></i>{/* tu dodać onClick={removeMovieAction(movie)} */}
            </button>
            </>
            <div className="movie-title">{movie.title}</div>
        </div>
    )
}
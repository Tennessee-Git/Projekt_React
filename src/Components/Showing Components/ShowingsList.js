import React from 'react'
import ShowingDetails from './ShowingDetails'
import PropTypes from "prop-types"

const ShowingsList = ({showings}) => {
    return (
        <div className="card-container"> 
                    <div className="movie-grid">
                    {showings.map((showing,key) =>
                        <ShowingDetails key={showing.id} id={showing.id} movieTitle={showing.movieTitle} date={showing.date} roomId={showing.roomId}/>)}
                    </div>
                </div>
    )
}

ShowingsList.propTypes = {
    showings: PropTypes.arrayOf(PropTypes.object),
}

export default ShowingsList
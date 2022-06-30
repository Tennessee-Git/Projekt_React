import React from 'react';
import ShowingDetails from './ShowingDetails'
import PropTypes from "prop-types"

const ShowingsList = ({showings, deleteFunc}) => {
    return (
        <div className="card-container"> 
            <div className="custom-grid">
            {showings.map((showing,key) =>
                <ShowingDetails 
                key={showing.id} 
                id={showing.id} 
                movieTitle={showing.movieTitle} 
                date={showing.date} 
                roomId={showing.roomId} 
                availableSeats={showing.availableSeats}
                deleteFunc={deleteFunc}/>)}
            </div>
        </div>
    )
}

ShowingsList.propTypes = {
    showings: PropTypes.arrayOf(PropTypes.object),
}

export default ShowingsList
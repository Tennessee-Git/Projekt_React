import React, {useState, useEffect} from 'react';
import { getShowings, deleteShowing } from '../../api/api'
import ShowingDetails from './ShowingDetails'
import PropTypes from "prop-types"

const ShowingsList = () => {
    const [showings, setShowings] = useState([]);

    useEffect(() =>{
        const getAllShowings = async () => {
          const allShowings = await getShowings();
          if(allShowings) setShowings(allShowings);
        };
        getAllShowings();
      },[]);

    const deleteFunction = (id) => {
        deleteShowing(id);
        setShowings(showings.filter((i)=>(i.id !== id)));
    }

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
                deleteFunc={deleteFunction}/>)}
            </div>
        </div>
    )
}

ShowingsList.propTypes = {
    showings: PropTypes.arrayOf(PropTypes.object),
}

export default ShowingsList
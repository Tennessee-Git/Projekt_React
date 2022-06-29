import React, {useEffect, useState} from 'react';
import { getShowingsNow } from '../api/api';
import ShowingDetails from '../Components/Showing Components/ShowingDetails';

function HomePage() {
    const [showingsNow, setShowings] = useState([]);

    useEffect(() => {
        const getShowings = async () => {
            const showingsNow = await getShowingsNow();
            if(showingsNow) setShowings(showingsNow);
        };
        getShowings();
        
    },[]);

    return (
        <div>
            <div className="heading">
            <br/>
                <h1>Najbliższe seanse:</h1>
            </div>
            <div className="card-container"> 
                <div className="custom-grid">
                    {showingsNow.map((showing,key) =>
                        <ShowingDetails 
                        key={showing.id} 
                        id={showing.id} 
                        movieTitle={showing.movieTitle} 
                        date={showing.date} 
                        roomId={showing.roomId} 
                        availableSeats={showing.availableSeats}/>)}
                </div>
            </div>
        </div>
    )
}

export default HomePage

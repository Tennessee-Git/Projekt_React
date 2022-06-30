import React, {useEffect, useState} from 'react';
// import { filterFromLast7Days, filterShowingsNow } from '../api/filters';
import { getShowings } from '../api/api';
import PopularityChart from '../Components/Popularity Components/PopularityChart';
import ShowingDetails from '../Components/Showing Components/ShowingDetails';

function HomePage() {
    const [showings, setShowings] = useState([]);
    // const [showingsNow, setShowingsNow] = useState([]);

    useEffect(() =>{
        const getAllShowings = async () => {
            const allShowings = await getShowings();
            if(allShowings)
                setShowings(allShowings);
        };
        getAllShowings();
        console.log(showings)
      },[]);

    return (
        <div>
            <div className="heading">
            <br/>
                <h1>Najbliższe seanse:</h1>
            </div>
            <div className="card-container">
                <div className="custom-grid">
                    {showings.map((showing,key) =>
                        <ShowingDetails
                        key={key}
                        id={showing.id}
                        movieTitle={showing.movieTitle}
                        date={showing.date}
                        roomId={showing.roomId}
                        availableSeats={showing.availableSeats}/>)}
                </div>
                {/* <p>GAMING</p>
                <div className="custom-grid">
                    {filterShowingsNow(showings).map((showing,key) =>
                        <ShowingDetails
                        key={key}
                        id={showing.id}
                        movieTitle={showing.movieTitle}
                        date={showing.date}
                        roomId={showing.roomId}
                        availableSeats={showing.availableSeats}/>)}
                </div> */}
            </div>
            {/* <div className='popularity'>
                <PopularityChart showings={showings}></PopularityChart>
            </div> */}
        </div>
    )
}

export default HomePage

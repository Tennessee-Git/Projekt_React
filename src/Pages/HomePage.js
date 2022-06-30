import React, {useEffect, useState} from 'react';
import { getShowingsNow, getShowingsFromLast7Days } from '../api/api';
import ShowingDetails from '../Components/Showing Components/ShowingDetails';
import PopularityChart from '../Components/Popularity Components/PopularityChart';

function HomePage() {
    const [showingsNow, setShowingsNow] = useState([]);
    const [showingsFromLast7Days, setShowingsFromLast7Days] = useState([]);

    useEffect(() =>{
        const getAllShowings = async () => {
            const showingNowAndAfter = await getShowingsNow();
            if(showingNowAndAfter)
                setShowingsNow(showingNowAndAfter);
            const showingsFromBefore = await getShowingsFromLast7Days();
            if(showingsFromBefore)
                setShowingsFromLast7Days(showingsFromBefore);
        };
        getAllShowings();
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
                        key={key}
                        id={showing.id}
                        movieTitle={showing.movieTitle}
                        date={showing.date}
                        roomId={showing.roomId}
                        availableSeats={showing.availableSeats}/>)}
                </div>
            </div>
            <div className='popularity'>
                <PopularityChart showings={showingsFromLast7Days}></PopularityChart>
            </div>
        </div>
    )
}

export default HomePage

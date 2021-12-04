import React, {useEffect, useState} from 'react';
import { getShowingsNow } from '../api/api';
import ShowingsList from '../Components/Showing Components/ShowingsList';

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
            <ShowingsList showings={showingsNow} />
        </div>
    )
}

export default HomePage

import React, {useState, useEffect} from 'react'
import { getShowings } from '../api/api';
import AddShowingForm from '../Components/Forms/AddShowingForm';
import Popup from '../Components/Popup/Popup';
import ShowingsList from '../Components/Showing Components/ShowingsList';

function ShowingsPage() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [showings, setShowings] = useState([]);

    useEffect(() =>{
        const getAllShowings = async () => {
          const allShowings = await getShowings();
          if(allShowings) setShowings(allShowings);
        };
        getAllShowings();
      },[]);

    return (
        <div>
            <div>
                <div className="heading">
                    <br/>
                    <h1>Lista seansów: <button className="AddBtn" onClick={() => setButtonPopup(true)}>Dodaj seans</button></h1>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <AddShowingForm/>
                    </Popup>
                </div>
                <ShowingsList showings={showings}/>
                
            </div>
        </div>
    )
}

export default ShowingsPage

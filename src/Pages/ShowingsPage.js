import React, {useState} from 'react'
import AddShowingForm from '../Components/Forms/AddShowingForm';
import Popup from '../Components/Popup/Popup';

function ShowingsPage() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <div>
                <div>
                    <br/>
                    <h1>Lista seansów: </h1>
                    <button onClick={() => setButtonPopup(true)}>Dodaj film</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <AddShowingForm/>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default ShowingsPage

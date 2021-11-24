import React, {useState} from 'react'
import AddMovieForm from '../Components/Forms/AddMovieForm';
import Popup from '../Components/Popup/Popup';
import MovieDetails from '../Components/Movie Components/MovieDetails'

function MoviesPage() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const movie = {
        title:"bruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruh", 
        imageURL:"https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png"
    };

    return (
        <div>
            <div>
                <div>
                    <br/>
                    <h1>Lista filmów: <button className="AddBtn" onClick={() => setButtonPopup(true)}>Dodaj film</button></h1>
                    
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <AddMovieForm/>
                    </Popup>
                </div>
                <MovieDetails movie={movie}/>
            </div>
        </div>
    )
}

export default MoviesPage

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MoviesPage from './Pages/MoviesPage';
import ShowingsPage from './Pages/ShowingsPage';
import GetMovieId from './Components/GetMovieId';
import GetShowingId from './Components/GetShowingId';

function App() {
  return (
      <div className="page-container">
        <div className="content-wrap">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/seanse"  exact element={<ShowingsPage/>}/>
        <Route path="/filmy" exact element={<MoviesPage/>}/>
        <Route exact path="/edytujFilm/:id" element={<GetMovieId/>}/>
        <Route path='/edytujSeans/:id' element={<GetShowingId/>}/>
        {/* <Route path='/rezerwuj/:seansId/:id' element={}/> */}
      </Routes>
          </div>
          <Footer/>
      </div>
  );
}

export default App;

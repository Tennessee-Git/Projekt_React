import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MoviesPage from './Pages/MoviesPage';
import ShowingsPage from './Pages/ShowingsPage';
import GetMovieId from './Components/GetMovieId';
import GetShowingId from './Components/GetShowingId';
import GetRoomId from './Components/GetRoomId';
import RoomsPage from './Pages/RoomsPage';

function App() {
  return (
      <div className="page-container">
        <div className="content-wrap">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/seanse"  exact element={<ShowingsPage/>}/>
        <Route path="/filmy" exact element={<MoviesPage/>}/>
        <Route path="/sale" exact element={<RoomsPage/>}/>
        <Route exact path="/edytujFilm/:id" element={<GetMovieId/>}/>
        <Route path='/edytujSeans/:id' element={<GetShowingId type="edit"/>}/>
        <Route path='/edytujSale/:id' element={<GetRoomId/>}/>
        <Route path='/rezerwuj/:id' element={<GetShowingId type="reservation"/>}/>
      </Routes>
          </div>
          <Footer/>
      </div>
  );
}

export default App;

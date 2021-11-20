import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MoviesPage from './Pages/MoviesPage';
import AddMovieForm from './Components/Forms/AddMovieForm';
import ShowingsPage from './Pages/ShowingsPage';

function App() {
  return (
      <div className="page-container">
        <div className="content-wrap">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/seanse"  exact element={<ShowingsPage/>}/>
        <Route path="/filmy" exact element={<MoviesPage/>}/>
        <Route path="/addMovie" exact element={<AddMovieForm/>}/>
      </Routes>
          </div>
          <Footer/>
      </div>
  );
}

export default App;

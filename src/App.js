import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MoviesPage from './Pages/MoviesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/seanse" />
        <Route path="/filmy" exact element={<MoviesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

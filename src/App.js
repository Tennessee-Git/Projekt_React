import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/seanse" />
        <Route path="/filmy" />
      </Routes>
    </div>
  );
}

export default App;

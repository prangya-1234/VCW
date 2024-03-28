import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Room from "./Room";
import About from "./components/About";
import CreatRoom from "./components/CreatRoom";
import Signup from './components/Signup';
import Login from './components/LogIn';
import Bloges from './components/Bloges';
import Hom from './components/Hom';
import Abt from './components/Abt';
import Blg from './components/Blg';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/create/:room" element={<CreatRoom/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/bloges" element={<Bloges/>}/>
        <Route path="/hom" element={<Hom/>}/>
        <Route path="/Abt" element={<Abt/>}/>
        <Route path="/blg" element={<Blg/>}/>
      </Routes>
    </div>
  );
}

export default App;

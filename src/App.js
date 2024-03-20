import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Room from "./Room";
import About from "./components/About";
import CreatRoom from "./components/CreatRoom";
import Signup from './components/Signup';
import Login from './components/LogIn';

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
      </Routes>
    </div>
  );
}

export default App;

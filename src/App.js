import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Room from "./Room";
import About from "./components/About";
import CreatRoom from "./components/CreatRoom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/create/:room" element={<CreatRoom/>}/>
      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import { Route, Routes  } from 'react-router-dom'
import Homepage from "./Homepage";
import Contactus from "./Contactus";
import Ourservices from "./Ourservices";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/" element={<Ourservices />} />
     <Route path="/" element={<Contactus />} />
     </Routes>
    </div>
  );
}

export default App;

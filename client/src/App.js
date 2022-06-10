
import { Routes, Route } from "react-router-dom"; 
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="container">
    <Navbar />
    <Routes>
   <Route path="/registration" element={<Registration/>}/>
   </Routes>
    </div>
  );
}

export default App;

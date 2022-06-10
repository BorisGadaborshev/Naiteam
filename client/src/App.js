
import { Routes, Route } from "react-router-dom"; 
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {



  return (
    <div className="container">
    <Navbar />
    <Routes>
   <Route path="/Registration" element={<Registration/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/Logout" element={<Login/>}/>
   <Route path="/Profile" element={<Profile/>}/>
   </Routes>
    </div>
  );
}

export default App;

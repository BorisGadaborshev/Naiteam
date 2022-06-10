import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

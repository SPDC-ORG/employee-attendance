import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
const App = () => {
  return (
    <div className='bg-red-300 h-screen'>
        <Header/>
      <Routes>
        <Route path="/employe/Home" element={<Home />} />
        <Route path="/employe/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

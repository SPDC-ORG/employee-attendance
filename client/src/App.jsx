import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

const App = () => {
  return (
    <div className='bg-red-300 h-screen'>
        <Routes>
          <Route path="/employe/login" element={<Login />} />
        </Routes>
    </div>
  );
};

export default App;

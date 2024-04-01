import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './NotFound';
import AdminPage from './AdminPage';
import Delete from './delete';
const App = () => {
  return (
    <div className='bg-red-300 h-screen'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/delete' element={<Delete />} />
      </Routes>
    </div>
  );
};

export default App;

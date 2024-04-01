// Login.js
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      console.log(response.data);
      enqueueSnackbar("Account created successfully", {variant: 'success'});
      navigate('/home')
    } catch (error) {
      enqueueSnackbar("Error", {variant: 'error'});
      setError(error.response.data.message);
    }
  };

  return (
    <div className='h-screen bg-white flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-[400px] h-[400px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-center text-2xl mb-10 font-[500]'>Login</h1>
        <input className='w-[350px] h-[45px] text-gray-500 p-4 mb-5 border' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className='w-[350px] h-[45px] text-gray-500 p-4 mb-5 border' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className='w-[350px] h-[45px] bg-[#3BE8A9] rounded-lg' type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;

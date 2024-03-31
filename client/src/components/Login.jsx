import React from 'react'
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div className='h-screen bg-white flex justify-center items-center'>
      <form action="" className='w-[400px] h-[400px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-center text-2xl mb-10 font-[500]'>Login</h1>
        <input className='w-[350px] h-[45px] text-gray-500 p-4 mb-5 border' type="text" placeholder='Employee ID'/>
        <input className='w-[350px] h-[45px] text-gray-500 p-4 mb-5 border' type="text" placeholder='Employee Password'/>
        <NavLink to='/employe/home'>
        <input className='w-[350px] h-[45px] bg-[#3BE8A9] rounded-lg' type="submit"/>
        </NavLink>
      </form>
    </div>
  )
}

export default Login;
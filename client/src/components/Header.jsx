import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <div className='w-[100%] h-[60px] bg-white border flex justify-between	 items-center flex-row'>
    <img src="" alt="Logo" className='ml-[60px] w-[100px]'/>
    <NavLink to="/employe/login">
    <button className='mr-[60px]'><img className='w-[20px]' src="" alt="SignOut" /></button>
    </NavLink>
   </div>
  )
}

export default Header


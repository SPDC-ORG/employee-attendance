import React from 'react'
import { useNavigate } from 'react-router-dom'




const Header = () => {
  const navigate = useNavigate();
  function logout(){
    navigate('/')
  }
  return (
   <div className='w-[100%] h-[60px] bg-white border flex justify-between	 items-center flex-row'>
    <img src="" alt="Logo" className='ml-[60px] w-[100px]'/>
    <button onClick={logout} className='mr-[60px]'>LogOut</button>
   </div>
  )
}

export default Header


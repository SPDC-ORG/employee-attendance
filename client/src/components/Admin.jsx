import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminNavbar = () => {
    return (
        <div className='w-full flex items-center bg-white h-[70px]'>
            <NavLink to='/signup'><img className='w-[40px] ml-10' src="/public/add (1).svg" alt="" /></NavLink>
            <NavLink to='/delete'><img className='w-[40px] ml-10' src="/public/delete.svg" alt="" /></NavLink>
            <NavLink to='/deleteemployee'><img className='w-[40px] ml-10' src="/public/update.svg" alt="" /></NavLink>
            
        </div>
    )
}

export default AdminNavbar

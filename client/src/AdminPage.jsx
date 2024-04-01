import React from 'react'
import AdminNavbar from './components/Admin'
const AdminPage = () => {
    return (
        <div className='h-svh bg-gray-200 flex-col justify-center items-center'>
            <AdminNavbar/>
            <section className='working w-[800px] h-[500px] rounded-lg'>
                <div className='leave flex m-5 flex-row justify-center h-[50px] items-center bg-gray-100 rounded-lg w-[600px]'>
                    <label htmlFor="" className='mr-10'>Name</label>
                    <p className='mr-10'>Wokring</p>
                    <p className='mr-10'>Time</p>
                </div>
                
                <div className='leave flex m-5 flex-row justify-center h-[50px] items-center bg-gray-100 rounded-lg w-[600px]'>
                    <label htmlFor="" className='mr-10'>Name</label>
                    <p className='mr-10'>Wokring</p>
                    <p className='mr-10'>Time</p>
                </div>
                <div className='leave flex m-5 flex-row justify-center h-[50px] items-center bg-gray-100 rounded-lg w-[600px]'>
                    <label htmlFor="" className='mr-10'>Name</label>
                    <p className='mr-10'>Wokring</p>
                    <p className='mr-10'>Time</p>
                </div>
                <div className='leave flex m-5 flex-row justify-center h-[50px] items-center bg-gray-100 rounded-lg w-[600px]'>
                    <label htmlFor="" className='mr-10'>Name</label>
                    <p className='mr-10'>Wokring</p>
                    <p className='mr-10'>Time</p>
                </div>
            </section>
        </div>
    )
}

export default AdminPage

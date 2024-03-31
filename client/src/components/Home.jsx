import React from 'react'

const Home = () => {
    const signInbtn = document.getElementById('signInbtn');
    const signIn = () =>{
        if(signInbtn.innerHTML === 'Sign Out'){
            signInbtn.innerHTML = 'Sign In' 
        }else{
            signInbtn.innerHTML = 'Sign Out'
        }
    }
    return (
        <div className='h-screen bg-white flex flex-col lg:flex-row items-center justify-around'>

            <section className='left-section'>
                <div>
                    <h1 className='text-2xl font-[600] mb-5'>Good morning bency</h1>
                    <p className='text-[20px] mb-5 text-gray-600'>"Morning! Ready to rock some code today? Let's crush it! 💻🔥 #CodeOn"</p>
                </div>
                <div className="shadow-md w-[450px] h-64 rounded-lg flex flex-col justify-center pl-10 pr-10 bg-white">
                    <p className="text-gray-700 mb-5">28 March 2024</p>
                    <p className="text-gray-700 mb-5">Thursday | 10:00am To 6:30pm</p>
                    <p className="text-gray-700 mb-5">19:14:32</p>
                    <div className='flex flex-row h-[40px] w-[auto]'>
                    <button id='signInbtn' onClick={signIn} className="bg-[#3BE8A9] mr-10 hover:bg-[#38AD83] text-black font-[500] py-2 px-4 rounded">Sign in</button>
                    <button id='signInbtn'  className="bg-orange-400 mr-10 hover:bg-orange-500 text-black font-[500] py-2 px-4 rounded">Break</button>
                    <button id='signInbtn' className="bg-red-500 hover:bg-red-600 text-white font-[500] py-2 px-4 rounded">Leave</button>
                    </div>
                </div>
            </section>

            <section className='right-section'>
                <div className='h-[400px] w-[360px] shadow-lg rounded-lg flex flex-col items-center justify-center'>
                    <p className='text-[20px] font-[400] mb-10'>Upcoming Holidays</p>

                   <div className='bg-gray-100 p-5 mb-5 w-[300px] rounded-lg hover:shadow-md'>
                   <p>29 Mar Friday</p>
                    <p>Good Friday</p>
                   </div>

                   <div className='bg-gray-100 p-5 mb-5 w-[300px] rounded-lg hover:shadow-md'>
                   <p>29 Mar Friday</p>
                    <p>Good Friday</p>
                   </div>

                   <div className='bg-gray-100 p-5 mb-5 w-[300px] rounded-lg hover:shadow-md'>
                   <p>29 Mar Friday</p>
                    <p>Good Friday</p>
                   </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Home

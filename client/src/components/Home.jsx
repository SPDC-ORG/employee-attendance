import React, { useState } from 'react';
import Header from './Header';

const date = '28 March 2024';
const TimeOne = {
    day: 'Thursday 10:00am To 6:30pm',
};
const TimeTwo = "19:14:32";

const Home = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [username, setUsername] = useState('');
    
    const handleSignInOut = async () => {
        // Toggle sign-in state
        setIsSignedIn(prevState => !prevState);

        // Make HTTP request to backend server
        try {
            const response = await fetch('http://localhost:5000/employeesignin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ time: new Date(), date: date, username: username }),
            });
            
            if (!response.ok) {
                throw new Error('Failed to sign in');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <div className='h-svh bg-white flex flex-col'>
            <Header />
            <div className='h-screen bg-white flex items-center justify-center'>
                <section className='left-section'>
                    <div className="shadow-md w-[450px] h-64 rounded-lg flex flex-col justify-center pl-10 pr-10 bg-white">
                       
                        <p className="text-gray-700 mb-5">{date}</p>
                        <p className="text-gray-700 mb-5">{TimeOne.day}</p>
                        <p className="text-gray-700 mb-5">{TimeTwo}</p>
                        <div className='flex flex-row h-[40px] w-[auto]'>
                            <button
                                className={`bg-${isSignedIn ? 'red' : '#3BE8A9'} mr-10 hover:bg-${isSignedIn ? 'red' : '#38AD83'} text-black font-[500] py-2 px-4 rounded`}
                                onClick={handleSignInOut}
                            >
                                {isSignedIn ? 'Sign out' : 'Sign in'}
                            </button>
                            {isSignedIn && (
                                <button
                                    className="bg-orange-400 mr-10 hover:bg-orange-500 text-black font-[500] py-2 px-4 rounded"
                                >
                                    Break
                                </button>
                            )}
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-[500] py-2 px-4 rounded"
                            >
                                Leave
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;

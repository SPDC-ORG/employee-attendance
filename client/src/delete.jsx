import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a DELETE request to delete the user by their database ID
      const response = await axios.delete(`http://localhost:5000/deleteuser/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
      setError(error.response.data.message);
    }
  };
  
  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;

import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const { userId }= useParams(); // Access route parameter

  return (
    <div> 
      <h2>User Profile</h2>
      <p>User ID {userId}</p> {/* Display route parameter value */}
    </div>
  );
};

export default UserProfilePage;

import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const { name, age } = useContext(UserContext);

  return (
    <div>
      <h2 style={{color: "red"}}>User Profile</h2>
      <p style={{color: "red"}}>Name: {name}</p>
      <p style={{color: "red"}}>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
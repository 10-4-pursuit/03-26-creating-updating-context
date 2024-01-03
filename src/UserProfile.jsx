import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);


//   const isOriginalName = useContext(UserContext).isOriginalName;
  

  return (
    <div>
      <h2>User Profile</h2>
      {/* <p>Name: {isOriginalName ?  'John Doe' : 'Jane Doe' }</p>  */}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;
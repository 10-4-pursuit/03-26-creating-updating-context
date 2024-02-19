import React , { useState } from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30
  });
  const handleNameChange = () => {
    setUser({ ...user, name: 'Katherine Johnson'});
  };
  
  return (
    <UserContext.Provider value={{ user }}>
      <div>
        <UserProfile />
        <button onClick={handleNameChange}>Change Name</button>
      </div>
    </UserContext.Provider>
  );
};


export default App;

import React, { useState } from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
  });

  
  // const [isOriginalName, setIsOriginalName] = useState(true)

  const handleChangeName = () => {
    // setUser({ ...user, name: isOriginalName ? 'Jane Doe' : 'John Doe' });
    setUser({ ...user, name: 'Jane Doe' });
    // setIsOriginalName(!isOriginalName);
  };

  return (
    // <UserContext.Provider value={{ user, isOriginalName }}>
    <UserContext.Provider value={user}>
      <UserProfile />
      <button onClick={handleChangeName}>Change Name</button>
    </UserContext.Provider>
  );
}

export default App;

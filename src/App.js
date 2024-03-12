import UserContext from './UserContext';
import UserProfile from './UserProfile';
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', age: 30})
  const contextValue = { user, setUser };
  return (
    <div className="App">
      <UserContext.Provider value = { contextValue }>
        <UserProfile/>
      </UserContext.Provider>
    </div>
  );
}

export default App;

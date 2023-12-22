
import './App.css';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [user, setUser] = useState({ name: 'Danny Torres', age: 40 }) //  initial state for the user object with name and age properties

  const updateUser = (newName) => { // function to update the name property with the new value
    setUser(( prevUser ) => ({ // passing the previous state as a parameter
      ...prevUser, // spread operator to copy the previous state
      name: newName  // update the name property with the new value
    }))
    
  }
  return (
    <div className="App">
      <UserContext.Provider value={user}>
      <UserProfile/>
      </UserContext.Provider>
    


      <button onClick={() => updateUser('Saniel Doe')}>Update Name</button>
   
    </div>
  );
}

export default App;

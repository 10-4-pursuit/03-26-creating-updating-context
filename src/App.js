// Importing necessary libraries and components
import React from 'react';
import './App.css';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  // State to store user data

  const [user, setUser] = React.useState({ name: "John Doe", age: 30 });

  // Function to change the user's name
  function changeName() {
    setUser(previousUser =>  ({ 
      ...previousUser, 
      name: previousUser.name === "John Doe" ? "Jane Doe" : "John Doe"
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* UserContext.Provider makes the user data available to child components */}
        <UserContext.Provider value={user}>
          {/* UserProfile component displays user data */}
          <UserProfile />
          {/* Button toggle between changing the user's name */}
          <button onClick={changeName}>Change User's Name</button>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;

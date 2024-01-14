import './App.css';
import React, { useState } from "react";
import UserContext from './UserContext';
import UserProfile from './UserProfile';

function App() {
  // UserProvider component using useState to manage user data
  const UserProvider = ({ children }) => {
    // Initial user state
    const [user, setUser] = useState({ name: 'John Doe', age: 30 });
    // Create context value with user state and setUser function
    const contextValue = { user, setUser };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
  };

  return (
    // Provide the user context to the children components
    <div className="App">
      <header className="App-header">
        <div>
          {/* Wrap UserProfile with UserProvider to provide user context */}
          <UserProvider>
            <UserProfile />
          </UserProvider>
        </div>
      </header>
    </div>
  );
}

export default App;

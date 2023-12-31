// Import the React library
import React from "react";

// Creating a context with default values for user's name and age
const UserContext = React.createContext({ name: "John Doe", age: 30 });

// Exporting the context to be used in other components
export default UserContext;


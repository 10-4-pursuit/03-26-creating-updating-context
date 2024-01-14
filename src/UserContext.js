import React from "react";

// Create a context with initial user data
const UserContext = React.createContext({ name: 'John Doe', age: 30 });

export default UserContext;
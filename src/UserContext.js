import React from 'react';
const UserContext = React.createContext({
    name: 'John Doe',
    age: 30
});

export default UserContext;
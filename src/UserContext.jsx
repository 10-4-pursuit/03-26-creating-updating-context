import React, { createContext } from 'react';

const UserContext = createContext({
  name: 'Martian Manhunter',
  age: 3000,
  height: '5 ft'
});

export default UserContext

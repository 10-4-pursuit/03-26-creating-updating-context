import React, { useState, useContext }
 from "react";
 import UserContext from "./UserContext";
const ChangeUserName = () => {
    const [newName, setNewName] = useState('');
    const { user, setUser } = useContext(UserContext);
  
    const handleChange = (e) => {
      setNewName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ ...user, name: newName });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={handleChange} />
        <button type="submit">Change Name</button>
      </form>
    );
  };
  
  export default ChangeUserName;  
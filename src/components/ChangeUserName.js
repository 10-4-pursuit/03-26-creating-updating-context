import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const ChangeUserName = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    e.preventDefault();
  };
  const handleAgeChange = (e) => {
    setNewAge(e.target.value);
    e.preventDefault();
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, name: newName });
    setNewName("");
    setNewAge("");
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, age: newAge });
    setNewName("");
    setNewAge("");
  };

  return (
    <div>
      <h2>New UserProfile</h2>
      <form onSubmit={handleNameSubmit}>
        <input type="text" value={newName} onChange={handleNameChange} />
        <button type="submit">Change Name</button>
      </form>
      <br></br>
      <form onSubmit={handleAgeSubmit}>
        <input type="number" value={newAge} onChange={handleAgeChange} />
        <button type="submit">Change Age</button>
      </form>
    </div>
  );
};

export default ChangeUserName;

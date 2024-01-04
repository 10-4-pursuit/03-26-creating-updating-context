import React, { useState } from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';
import martian from '/Users/adalovelace/Documents/Shambala/module_three/03-26-creating-updating-context-themind/src/assets/martian_02.jpeg';
import dracula from '/Users/adalovelace/Documents/Shambala/module_three/03-26-creating-updating-context-themind/src/assets/dracula-icon.jpeg';
import wonder from '/Users/adalovelace/Documents/Shambala/module_three/03-26-creating-updating-context-themind/src/assets/wonder-womanlogo.jpeg';
import superman from '/Users/adalovelace/Documents/Shambala/module_three/03-26-creating-updating-context-themind/src/assets/superman-icon.jpeg';
import batman from '/Users/adalovelace/Documents/Shambala/module_three/03-26-creating-updating-context-themind/src/assets/batman.jpeg'
import './App.css'


function App() {
  const names = ['Martian Manhunter', 'Dracula', 'Wonder Woman', 'Superman', 'Batman'];
  const ages = [3000, 10000, 200, 350, 55];
  const backgroundImages = [martian, dracula, wonder, superman, batman];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);
  
  const [user, setUser] = useState({
    name: names[currentNameIndex],
    age: 3000
    ,
  });




  const handleChangeProfile = () => {
    setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    setUser({ ...user, name: names[currentNameIndex], age: ages[currentNameIndex] });
    setBackgroundImage(backgroundImages[currentNameIndex]);
  };

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <UserContext.Provider value={user}>
      <UserProfile />
      <button onClick={handleChangeProfile}>Change Profile</button>
    </UserContext.Provider>
    </div>
  );
}

export default App;

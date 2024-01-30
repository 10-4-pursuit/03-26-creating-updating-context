import React, {useState} from "react";
import "./App.css";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import ChangeUserName from "./components/ChangeUserName";

function App() {

  return (
    <div>
      <UserProvider>
        <UserProfile />
        <ChangeUserName />
      </UserProvider>
    </div>
  );
}
export default App;

import React from "react";
import "./App.css";
import UserContextProvider from "./components/UserContextProvider";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
    <UserContextProvider>
      <UserProfile />
    </UserContextProvider>
    </div>
  );
}
export default App;

// Importing necessary libraries and components
import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
    // Accessing user data from UserContext
    const { name, age } = useContext(UserContext);

    return (
        <div>
            <h1>User Profile</h1>
            {/* Displaying user's name and age */}
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default UserProfile
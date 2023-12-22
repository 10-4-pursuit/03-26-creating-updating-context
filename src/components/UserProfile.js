import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import "./UserProfile.css"

const UserProfile = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

export default UserProfile
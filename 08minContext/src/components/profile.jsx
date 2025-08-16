import React, { useContext } from 'react'
import UserContext from '../context/userContext'
import Login from './login'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>
    
    return <div>Welcome {user.Username}</div>
}

export default Profile

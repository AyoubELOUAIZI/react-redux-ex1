import React from 'react'
import { useSelector } from 'react-redux'


export const Profile = () => {
    const user = useSelector((state) => state.user.value);
    return (
        <div>Profile
            <h1>profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age:{user.age}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}

import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {
    const user=useSelector((state)=>state.user.value);  //buscar state no component
    const themeColor =useSelector((state)=>state.theme.value);//buscar o valor do input
  return (
    <div style={{color:themeColor}}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>  
        <p>Color:{themeColor} </p>  
    </div>
  )
}

export default Profile

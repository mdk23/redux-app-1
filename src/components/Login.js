import React from 'react'
import { useDispatch } from 'react-redux' //alterar state
import { login,logout } from '../reducers/user'

function Login() {
const dispatch= useDispatch();

  return (
    <>
    
    <button onClick={()=>{dispatch(login({name:' Mauro Danilo Kane',age:20, email:'md@hotmail.com'}))}}>
      Login
    </button>

    <button onClick={()=>{dispatch(logout())}}>
      Logout
    </button>
    </>
  )
}

export default Login

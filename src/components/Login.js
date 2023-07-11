import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user';

export const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={()=>{
          dispatch(login({ name: "test name", age: 290, email: "ayou@gmail.coom" }))
      }}
      >Login</button>
    </div>
  )
}

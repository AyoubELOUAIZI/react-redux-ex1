import React from 'react'
import { useDispatch } from 'react-redux'
import { login ,logout} from '../features/user';

export const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={()=>{
          dispatch(login({ name: "test name", age: 290, email: "ayou@gmail.coom" }))
      }}
      >Login</button>

      <button
      onClick={()=>{
          dispatch(logout())
      }}
      >Logout</button>
    </div>
  )
}

import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { useEffect } from 'react'

// to use the data provided by context api first we have to import the context object that is created in context.js file and we need to import the function useContext provided by react in order to use the context api.


function User() {
  console.log("user")
  // once we done that we have to call the useContext function by passing our context object as an argument. and it will return us the dictionary that we passed in the value attribute in our context provider.jsx file.
  // and now we can use this data 😁.
  const {user, setUser} = useContext(UserContext)
  useEffect(()=>{
    setUser('Farrukh')
  })
  return (
    <div>
        <div className='m-4'>Users: {user}</div>
        <Link to="/user/userdetails" className='px-5 py-2 bg-sky-600 rounded-xl text-white m-5'>User Details</Link>
    </div>
  )
}

export default User
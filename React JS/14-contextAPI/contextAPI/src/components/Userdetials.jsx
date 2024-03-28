import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Userdetials() {
  console.log("userDetials")
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      the user name is : {user}
    </div>
  )
}

export default Userdetials
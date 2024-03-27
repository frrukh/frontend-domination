import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    // to use dynamic routing we create an example of user details.
    // here we have some users and we give them static routes.
    // now we will control these static routes dynamically through Routing.jsx.
    <>
    <div className='h-screen w-full bg-orange-400 text-7xl font-extrabold text-center p-10'>
        User
    <div className='mt-32 container mx-auto max-w-96 text-3xl font-bold'>
      <Link to="/user/ali" className='bg-red-300 rounded-3xl px-7 py-3'>Ali</Link>
      <br />
      <br />
      <br />
      <Link to="/user/ahmed" className='bg-red-300 rounded-3xl px-7 py-3'>Ahmed</Link>
      <br />
      <br />
      <br />
      <Link to="/user/noman" className='bg-red-300 rounded-3xl px-7 py-3'>Noman</Link>
      <br />
      <br />
      <br />
      <Link to="/user/saqib" className='bg-red-300 rounded-3xl px-7 py-3'>Saqib</Link>
      <br />
      <br />
      <br />
      <Link to="/user/rahat" className='bg-red-300 rounded-3xl px-7 py-3'>Rahat</Link>
    </div>
    </div>
    </>
  )
}

export default User
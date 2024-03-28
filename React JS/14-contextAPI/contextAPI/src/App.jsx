import React from 'react'
import Home from './components/Home'
import { Link, Routes, Route } from 'react-router-dom'
import Shop from './components/Shop'
import User from './components/User'
import Userdetials from './components/Userdetials'
import UserContextProvider from './context/UserContextProvider'


const App = () => {
    console.log("app")
  return (
    // to implement the context we have to just import the function exported from context provider and make a tag of it that will be used to wrap all the other tags or we can also do this in main.jsx to wrap the <App /> tag.
    // now go to the User or Userdetials component to check how to use the data provided by context api. 
    <UserContextProvider>
        <div>
            
        <nav className='mb-5 flex gap-11 items-center justify-center p-5 font-bold bg-red-300'>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/user">User</Link>
        </nav>
        <div className='p-5'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/user' element={<User />} />
                <Route path='/user/userdetails' element={<Userdetials />} />
            </Routes>
        </div>
        </div>
    </UserContextProvider>
  )
}

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import UserDets from '../components/UserDets'
import AboutChild from '../components/AboutChild'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />

        {/* to create a parameter in route we have to add : before its name */}
        {/* we can get the value of parameter in the component given in element attribute. */}
        <Route path='/user/:name' element={<UserDets />} />


        {/* to open the child on the same page first we have to make closing tag of parent and put the child tag in it. */}
        {/* one more thing we should do in the parent component */}
        <Route path='/about' element={<About />}>
            <Route path='/about/:name' element={<AboutChild />} />
        </Route>
    </Routes>
    </>
  )
}

export default Routing
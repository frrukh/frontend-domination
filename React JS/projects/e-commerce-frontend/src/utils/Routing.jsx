import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import ProductDets from '../components/ProductDets'
import Create from '../components/Create'
import Edit from '../components/Edit'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDets />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default Routing
import React from 'react'
import Products from './components/Products';
import Main from './components/Main';
import { Link, Route, Routes } from 'react-router-dom';



// React Life Cycle.

function App() {
  return (
    <div className='overflow-hidden'>
      <nav className='bg-black text-white p-3 font-semibold text-xl flex gap-10'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App;
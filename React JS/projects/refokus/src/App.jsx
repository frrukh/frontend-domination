import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

function App() {
  return (
    <div className='bg-[#161618] min-h-screen w-full text-white'>
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App
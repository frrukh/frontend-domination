import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='min-h-screen w-full bg-orange-400 text-7xl font-extrabold text-center p-10'>
        About
      <div className='mt-32 container mx-auto max-w-96 text-3xl font-bold'>
        <Link to="/about/ali" className='bg-red-300 rounded-3xl px-7 py-3'>Ali</Link>
        <br />
        <br />
        <Link to="/about/ahmed" className='bg-red-300 rounded-3xl px-7 py-3'>Ahmed</Link>
        <br />
        <br />
        <Link to="/about/noman" className='bg-red-300 rounded-3xl px-7 py-3'>Noman</Link>
        <br />
        <br />
        <Link to="/about/saqib" className='bg-red-300 rounded-3xl px-7 py-3'>Saqib</Link>
        <br />
        <br />
        <Link to="/about/rahat" className='bg-red-300 rounded-3xl px-7 py-3'>Rahat</Link>
      </div>
      {/* to give the place on which the child component will open we have Outlet self closing tag give by react-router-dom */}
      <Outlet />
    </div>
    </>
  )
}

export default About
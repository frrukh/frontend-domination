import React from 'react'

function Card() {
  return (
    <div className='w-72 bg-zinc-200 m-24 rounded-md overflow-hidden'>
        <div className='w-full h-44 bg-zinc-300'>
            <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='p-5'>
            <h1 className='font-bold text-xl'>amazon.</h1>
            <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut voluptatem laudantium eos eveniet!</p>
            <button className='px-4 py-2 text-sm mt-5 rounded-full bg-slate-700 text-white '>Check out</button>
        </div>
    </div>
  )
}

export default Card;
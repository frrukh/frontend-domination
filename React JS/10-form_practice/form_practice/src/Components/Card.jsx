import React from 'react'

function Card({data, index, removeEntry}) {
  return (
    <div className='w-44 bg-white flex flex-col items-center p-4 rounded-md gap-2 text-center'>
        <div className='bg-red-300 h-14 w-14 rounded-full overflow-hidden'>
            <img className='h-full w-full' src={data.image} alt="" />
        </div>
        <h1 className='font-semibold'>{data.name}</h1>
        <h2 className='text-xs font-semibold opacity-60'>{data.email}</h2>
        <p className='text-sm leading-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button onClick={()=>removeEntry(index)} className='bg-red-600 px-4 py-1 rounded-md font-semibold text-white mt-3'>delete</button>
    </div>
  )
}

export default Card;
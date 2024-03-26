import React from 'react'



// instead of getting props i.e. dictionary it is more efficient to destructure it while getting it.
// function Card({name, profession, image}) {
    // but in this case there is another more efficient way, to understand it, go and see the parent element.
function Card({info, func, index}) {

    const {name, profession, image, friends} = info;

  return (
    <div className='shrink-0 w-60 bg-white rounded-md overflow-hidden'>
    <div className='h-44 w-full bg-blue-300'>
        <img className='h-full w-full object-cover hover:scale-110 transition-all duration-700' src={image} alt="" />
    </div>
    <div className='p-3'>
        <h1 className='text-xl font-semibold'>{name}</h1>
        <h2 className='text-sm'>{profession}</h2>
        <button onClick={()=>func(index)} className={`px-3 py-1 ${friends ? "bg-green-600" : "bg-blue-400"} rounded-md text-white mt-4`}>{friends ? "Friend" : "Add Friend"}</button>
    </div>
    </div>
  )
}

export default Card;
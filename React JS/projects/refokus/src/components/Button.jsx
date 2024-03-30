import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <button className='px-5 py-2 text-black bg-white rounded-full flex items-center gap-2'>
        Start Project
        <IoIosReturnRight className='h-1/2' />
    </button>
  )
}

export default Button
import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-5 border-b-[1px] border-zinc-500 flex items-center justify-between'>
        <div className='nleft flex gap-28'>
        <img className='' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='flex gap-14'>
            {['Home', 'Wrok', '', 'News'].map((elem, index)=>(
                elem.length == 0 ?  <span className='inline-block w-[1px] bg-zinc-500'></span> :
                (<a href="" className='flex items-center gap-1 text-sm'>
                    {index===1 && <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1 h-1 bg-[#00FF19] rounded-full'></span>}
                    {elem}
                </a>) 
            ))}
        </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar
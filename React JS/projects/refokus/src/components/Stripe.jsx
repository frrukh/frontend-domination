import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[20vw] px-4 py-6 border-y-[0.5px] border-r-[0.5px] border-zinc-600 flex justify-between'>
        <img src={val.url} alt="" />
        <span className=''>{val.number}</span>
    </div>
  )
}

export default Stripe
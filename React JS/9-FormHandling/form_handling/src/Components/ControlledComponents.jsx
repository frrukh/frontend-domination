import React, { useState } from 'react'

    // 2) Controlled Components: 
        // in this method we use useState and we update the state on every change in the input.

function ControlledComponents() {

    const [val, setVal] = useState("");

    const handleSubmit = (details)=>{
        details.preventDefault();
        console.log(val)
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input onChange={(events)=>setVal(events.target.value)} type="text" className='border rounded-md p-1 m-3' placeholder='Name' />
        <input type="submit" className='bg-blue-500 px-2 py-1 rounded-xl text-white' />
    </form>
  )
}

export default ControlledComponents;
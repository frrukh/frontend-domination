import React, { useState } from 'react'

    // 2) Controlled Components2: 

function ControlledComponents2() {

    const [val, setVal] = useState({name:"", age: "", email: ""});

    const handleSubmit = (details)=>{
        details.preventDefault();
        console.log(val)
    }
  return (
    // for multiple inputs first we have to use spread operator to get all the previous values and then we can override the targeted value.
    <form action="" onSubmit={handleSubmit}>
        <input onChange={(events)=>setVal({...val ,name:events.target.value})} type="text" className='border rounded-md p-1 m-3' placeholder='Name' />
        <input onChange={(events)=>setVal({...val ,age:events.target.value})} type="text" className='border rounded-md p-1 m-3' placeholder='Age' />
        <input onChange={(events)=>setVal({...val ,email:events.target.value})} type="text" className='border rounded-md p-1 m-3' placeholder='Email' />
        <input type="submit" className='bg-blue-500 px-2 py-1 rounded-xl text-white' />
    </form>
  )
}

export default ControlledComponents2;
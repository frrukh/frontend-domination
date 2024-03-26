import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {
  const raw = [
    {name: "John", email: "john13@gmial.com", image: "https://images.unsplash.com/photo-1710880079976-0b838851c8c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"}
  ]
  const [data, setData] = useState(raw);

  const handleData = (val)=>{
    setData(prev=>[...prev, val])
  }

  const removeEntry = (ind)=>setData(prev=>prev.filter((val, index)=>index !== ind))

  return (
    <div className="min-h-screen w-full bg-zinc-200 flex items-center justify-center flex-col">
      <Cards data={data} removeEntry={removeEntry} />
      <Form handleData={handleData} />
    </div>
  )
}

export default App
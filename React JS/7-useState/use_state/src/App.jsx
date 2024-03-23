import React, { useState } from 'react'



function App() {
{/* Use State:
  // It is a something that contains a data, React takes care of it and when the state changes react updates the page.
  // state can contain any type of data.
  // useState always gives an array of length 2, on first index it contains the given data and on second index it contains a function to update the data.
  // to use it first we have to import it.
*/}
  const a = useState(true)
  // console.log(a[0]) //true
  // console.log(a[1]) // function
{/* 
  // to update the data we can simply call the function and pass the new value as an argument.
  // to call the function first we need to store it into a variable and we'll do that by destructuring of array.
*/}


const [abc, def] = useState(true)

// for ease we use teh first variable according to its data and second is same by adding set before it.
const [score, setScore] = useState(21);


// now we have a dictionary in our state.
const [dic, setDic] = useState({name : "harsh", is_banned : false});

  return (
    <div className='p-10'>
    <div>a: { a[0].toString() } </div>
    <button className='m-3 bg-blue-500 px-5 py-1 rounded-full text-white' onClick={()=>a[1](!a[0])}>toggle</button>
    <div>abc: { abc.toString() } </div>
    <button className='m-3 bg-blue-500 px-5 py-1 rounded-full text-white' onClick={()=>def(!abc)}>toggle</button>
    <div>score: { score } </div>
    {/* <button className='m-3 bg-blue-500 px-5 py-1 rounded-full text-white' onClick={()=>setScore(score+1)}>add score</button>  */}
    {/* this was not the good way to increment score. instead of ()=>setScore(score+1) we'll pass a function in setScore ,()=>setScore(prev=>prev+1), in that function we can get the previous value as a parameter. */}
    <button className='m-3 bg-blue-500 px-5 py-1 rounded-full text-white' onClick={()=>setScore(prev=>prev+1)}>add score</button>

    <hr />
    <h1>how we have dictionary in state!</h1>
    <h1>name: {dic.name}</h1>
    <h1>is banned: <span className='text-red-500 font-bold'>{dic.is_banned.toString()}</span></h1>
    {/* the state always accept a new element in parameter not and not allow you to edit the reference data type element as in reference the original one will be changed. so to update the reference data type first we make a copy of that and then we can update that like give below: */}
    <button onClick={()=>setDic(prev=>({...prev, is_banned:!prev.is_banned}))} className="rounded-full px-4 py-1 bg-blue-300 mt-5">toggle</button>

    </div>
  )
}

export default App;
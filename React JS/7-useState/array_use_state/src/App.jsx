import React from 'react'
import { useState } from 'react'

function App() {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const [array, setArray] = useState([
        {name: "foo", age: 21},
        {name: "zina", age: 18},
        {name: "borg", age: 11},
    ])
  return (
    // 
    <div className='p-10'>
        {/* we can print an array like {arr} */}
        {arr} {/* 1234567890 */}
        <br />
        <br />
        <hr />
        <br />
        <br />
        {/* lets make a button to remove the last element of the array */}

        {arr.map((val, ind)=><h1 key={ind}>{val}</h1>)}



        {/* Way one */}
        <button onClick={()=>setArr(()=>{
            var a = [...arr];
            arr.pop();
            return a;
        }) } className='px-3 py-1 bg-blue-500 rounded-full mt-3 -ml-7 text-white'>by pop()</button>

        {/* Way two */}
        <button onClick={()=>setArr(()=>arr.filter((val, ind)=> ind != arr.length-1 ))} className='px-3 py-1 bg-blue-500 rounded-full mt-3 mx-3 text-white'>by filter()</button>

        {/* Removing Second index */}
        <button onClick={()=>setArr(()=>arr.filter((val, ind)=> ind !== 2 ))} className='px-3 py-1 bg-blue-500 rounded-full mt-3 mx-3 text-white'>remove 2nd index</button>

        {/* Removing all values that are dividable by 2 */}
        <button onClick={()=>setArr(()=>arr.filter(val=> val%2 !== 0 ))} className='px-3 py-1 bg-blue-500 rounded-full mt-3 mx-3 text-white'>remove evens</button>

        {/* add value to array */}
        <button onClick={()=>setArr([...arr, 10])} className='px-3 py-1 bg-blue-500 rounded-full mt-3 mx-3 text-white'>add 10</button>

        <br />
        <br />
        <hr />
        <br />
        <br />
        {array.map((val, ind)=>(
            <div key={ind}>
                <h1>{val.name}</h1>
                <h2>{val.age}</h2>
                <hr />
            </div>
        ))}
        {/* increase borg's age */}
        <button onClick={()=>setArray(()=>array.map(val=> val.name=="borg"? {name:"borg", age:val.age+1 } : val ))} className='px-3 py-1 bg-blue-500 rounded-full mt-3 mx-3 text-white'>borg's age++</button>

    </div>
  )
}

export default App
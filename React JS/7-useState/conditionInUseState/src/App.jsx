import React, { useState } from 'react'

function App() {
  var [dict, setDict] = useState({ topic : 'Use State', isBanned : false });

  var [obj, setObj] = useState({name: "Hashim", age: 24})

  return (
    <div className='p-20'>
      <h1>topic: {dict.topic}</h1>
      <h1>is Banned: {dict.isBanned.toString()}</h1>

      {/* onClick function demands a function in its parameter without calling it i.e. "functionName" not "functionName()" and the function of useState also demands a parameter, if we simply give the name of the function of use state, how can we pass a parameter in it? for this reason we have to create an fat arrow function with implicit return on the spot and call our useState function in that function. */}
      {/* if we are updating the reference data present in use state, we can't update that data directly, for that we can create copy of it using spread operator, and then we can manipulate it. */}
      {/* we have to change the className using given method in order to make it dynamic  */}

      <button onClick={()=>setDict({...dict, isBanned : !dict.isBanned})} className={`px-2 py-1 ${dict.isBanned ? "bg-blue-500": "bg-red-500"} rounded-full text-sm text-white mt-5`}>change</button>

      <br />
      <br />
      <hr />
      <br />
      {/* adding a new key value pair in object. */}
      <button onClick={()=>{
        setObj({...obj, gender: 'male'});
        // on click of the state will not updated recently, React will update the state asynchronously after the completion of the main component function to fix the performance issues. so when we print the value of state It will return the old value.
        console.log(obj); // {name: 'Hashim', age: 24}
      } } className='px-2 py-1 bg-blue-500 rounded-full text-white'>click</button>
    </div>
  )
}

export default App;
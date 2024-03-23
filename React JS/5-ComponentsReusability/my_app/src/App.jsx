import React from 'react'

function App() {
  const name = "App";
  const name2 = "Appi";
  const calc = Math.floor(((12*24*4298)/122*2)/100);

  var arr = ['first', 'second', 'third'];
  var names = ['ali', 'aslam', 'hamid', 'husnain',]
  return (
    <div>
      {name} {name2} {calc}
      <br />
      {/* we can also use map without parameter and we can write tags in side functions directly */}
      {arr.map(()=> <h1>hello</h1>)} {/* Warning in console window: Each child in a list should have a unique "key" prop. */}
      <hr />
      {/* key prop is used to differentiate the multiple same elements. */}
      {/* it is "key" a attribute in tag whose value should be unique every time */}
      {arr.map((value, index)=> <h1 key={index}>hello</h1>)} 
      <hr />
      {names.map((elem, ind)=>(
        <div key={ind} className="p-6 m-1 bg-zinc-200 w-fit inline-block rounded-md">
          {elem}
        </div>
      ))}
    </div>
  )
}

export default App;
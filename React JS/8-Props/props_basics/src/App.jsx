import React, { useState } from 'react'
import Button from './Components/Button'
import Card from './Components/Card'
// OUR TASK IS TO UPDATE THE BUTTON OF CARD WHEN WE CLICK ON IT.



// we can send props like attributes.
function App() {
  const data = [
    {name: "Smith", profession: "Cook", image: "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D", friends: false},
    {name: "Wilson", profession: "Footballer", image: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDB8MHx8fDA%3D", friends: false},
    {name: "Rohan", profession: "Boxer", image: "https://images.unsplash.com/photo-1573129867134-97739682d386?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1hbiUyMGZhY2V8ZW58MHwwfDB8fHww", friends: false},
    {name: "Putail", profession: "Painter", image: "https://images.unsplash.com/photo-1549043671-1e4550948355?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbiUyMGZhY2V8ZW58MHwwfDB8fHww", friends: false},
    {name: "John", profession: "Programmer", image: "https://images.unsplash.com/photo-1575308118336-95434be06db7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGZhY2V8ZW58MHwwfDB8fHww", friends: false},
  ]


  // As we know that react can only update the data that is in useState(), so first we have to put the data into useState.
  const [raw, setRaw] = useState(data);  // we can only modify the state in same file where the state is defined.

  // we can only modify the state in same file where the state is defined.
  // but the problem is, we want to modify the state by the click of card that is in another file.
  // to resolve this problem, we can crete a function in this file and send it to the card component through props.
  // map the specific button on which the use clicked we can send the index of that button through props in card component we can use that index as a parameter to the onClick function.and here we can get that index to map the same card.

  const toggleFriendShip = (clickedIndex)=> {
    // we can get the old state as a parameter while calling the setState function. like : "prev" in our case.
    setRaw((prev)=>{
      return prev.map((val, ind)=>{
        if(ind === clickedIndex) return {...val, friends: !val.friends}
        return val
      })
    })

  }
  
  return (
    <>
    <Button text="Get Start" bgColor="bg-blue-500" />
    <Button text="Download" bgColor="bg-red-500" />
    <br />
    <br />
    <hr />

    <div className='p-4 min-h-screen w-full bg-zinc-300 flex items-center justify-center gap-5 flex-wrap'>
      {/* we can use map to iterate over the items of list */}

      {raw.map((value, index)=>(
        // <Card name={value.name} profession={value.profession} image={value.image} />
        // here we are repeating the sending properties, to solve it we can send whole object, and the destructure it in child component.
        <Card key={index} index={index} func={toggleFriendShip} info={value} />
      ))}
      
    </div>
    </>

  )
}

export default App
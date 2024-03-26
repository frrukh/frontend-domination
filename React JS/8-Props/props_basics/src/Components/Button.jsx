import React from 'react'
// Props are used to make the components reusable.
    // we can send the values from the parent component and receive and use them in child component.
    // props is a dictionary of properties sent from the parent component.
function Button(props) {
  return (
    <div className='p-10'>
        <button className={`m-4 px-3 py-1 ${props.bgColor} rounded-md text-white`}>{props.text}</button>
    </div>
  )
}

export default Button;
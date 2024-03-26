import React, { useRef } from 'react';
import ControlledComponents from './Components/ControlledComponents';
import ControlledComponents2 from './Components/ControlledComponents2';
import ReactHookForm from './Components/ReactHookForm';

// when we submit the form, the page refreshes. but React does't like to do so.
// so, to prevent the page to refresh on form submission, we have three ways.
    // 1) useRef - easiest.
    // 2) controlled components
    // 3) React hook form - mostly used.

    // 1) useRef: 
        // it is used to select an element like querySelector etc. and we can get that element later.
        
    function App() {
        
    // to use useRef first we have to create a useRef and save it to a variable.
    // by default we give it null because the DOM is not loaded yet.
    const name = useRef(null);
    const age = useRef(null);

    var handleSubmit = (events)=>{
        events.preventDefault();
        // to get the selected element by useRef() we can use the variable.
        console.log(name) // this will give an object{}.
        // to get just selected element.
        console.log(name.current)
        // and to get the value of the selected element.
        console.log(name.current.value);
        console.log(age.current.value);
    }

  return (
        // we can asign the value to the useRef by using ref attribute.
    <div className='p-16'>
        <h1 className='m-4 text-xl font-bold'>useRef:</h1>
        <form action="" onSubmit={handleSubmit}>
            <input ref={name} placeholder="Name"  type="text" className='border border-black p-1 m-3 rounded-md' />
            <input ref={age}  placeholder="Age" type="text" className='border border-black p-1 m-3 rounded-md' />
            <input type="submit" className='bg-blue-500 px-2 py-1 rounded-xl text-white' />
        </form>
        <br />
        <br />
        <hr />
        <br />
        <br />


        <h1 className='m-4 text-xl font-bold'>Controlled Components:</h1>
        <ControlledComponents />

        <br />
        <br />
        <hr />
        <br />
        <br />

        <ControlledComponents2 />

        <br />
        <br />
        <hr />
        <br />
        <br />
        <h1 className='m-4 text-xl font-bold'>React Hook Form:</h1>
        <ReactHookForm />
        
    </div>
  )
}

export default App;
import React from 'react'
import Slider from './Components/Slider';
function App() {
  return (
    <>
    <div className='h-96 flex items-center justify-center'>
      <h1 className='text-9xl'>These are Sliders<span className='text-red-600'>.</span></h1>
    </div>
    <Slider />
    </>
  )
}

export default App;
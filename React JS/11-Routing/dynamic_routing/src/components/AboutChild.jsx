import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AboutChild() {
  const {name} = useParams()

  const navigate = useNavigate()
  const goBack = ()=>{
    // navigate(-1);
    navigate("/about")
  }

  return (
    <>
    <br />
    <hr />
    <br />
    <div className='h-60 w-4/6 mx-auto bg-red-200 text-4xl font-semibold text-center py-10'>
      <p>About {name}.</p>
      <button onClick={goBack} className='mt-5 bg-sky-600 px-4 py-2 rounded-2xl text-white'>← Go Back</button>
    </div>
    </>
  )
}

export default AboutChild
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function UserDets() {
    // to get the value of the parameters of the route we can use a function give by react-router-dom called useParams that returns an object with params and values. like {name: 'Ali'}
    // for ease we can destructure the object.
    const {name} = useParams()
    
    // to redirect to another route react-router-dom gives us a function called useNavigate.
    // useNavigate function returns a function which takes an argument in which we can pass the route on which we want to go.
    const navigate = useNavigate()
    const goBack = ()=>{
        // navigate("/user")
        // if we do't know the previous route we can use the dynamic argument.
        navigate(-1)  // in this method if we directly came from home using url it will redirect back to home.
    }
  return (
    <>
    <div className='h-screen w-full bg-orange-400 text-7xl font-extrabold text-center p-10'>
        <p>Hello {name}.</p>
    
    {/* how can we go back without using Link tag ?  */}
    {/* to handle this we have to handle click event. */}
    <button onClick={goBack} className='mt-32 text-white bg-sky-600 px-5 py-2 rounded-xl font-bold'>← Go Back</button>
    </div>
    </>
  )
}

export default UserDets;
import React from 'react'
import { useForm } from 'react-hook-form'
    // 3) React Hook Form:
        // to use react hook form first we need to install it using a command (npm install react-hook-form) which you can get from react-hook-form.com.
        // to handle for we can use two properties: register and handleSubmit.
function ReactHookForm() {
    // console.log(useForm()); // this returns an object of multiple properties and methods.

    // we are going to use register method and handleSubmit method.
    const {register, handleSubmit} = useForm();
    // console.log(register())


  return (
    // register gives us an object contains name, onBlur(), onChange() and ref().
    // to implement register in an input we have to spread props and methods inside an input and pass the name of the input by which we can get the value later.
    // so, it's syntax will: {...register("name")} 


    // react form hook provides its own handleSubmit, so we have to just use it.
    // this handleSubmit function gives us the values of input in which we use register.and we can get these inputs by the given name in register.
    <form action="" onSubmit={handleSubmit(val=>console.log(val))}>
        <input {...register("name")} type="text" className='border rounded-md p-1 m-3' placeholder='Name' />
        <input {...register("age")} type="text" className='border rounded-md p-1 m-3' placeholder='Age' />
        <input {...register("email")} type="email" className='border rounded-md p-1 m-3' placeholder='Email' />
        <input type="submit" className='bg-blue-500 px-2 py-1 rounded-xl text-white' />
    </form>
  )
}

export default ReactHookForm;
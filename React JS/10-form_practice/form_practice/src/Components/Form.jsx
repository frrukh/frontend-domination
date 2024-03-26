import React from 'react'
import { useForm } from 'react-hook-form'


function Form({handleData}) {
    // register gives the link to the fields.
    // handleSubmit gives the value of registered input fields.
    // reset function is used to reset the form.
    const {register, handleSubmit, reset} = useForm();

  return (
    <div>
        {/* on onSubmit event we will call the function and the function will run on the submission of the form.  */}
        {/* but on onClick event we just refer the function, if we call the function here it will run with every render and show unexpected behavior. */}
        <form action="" className='flex gap-4' onSubmit={handleSubmit(val=>{
            handleData(val)
            reset()
            })}>
            <input {...register('name')} type="text" className='rounded px-2 py-1 border border-[#00000030] focus:border-[#00000080] outline-none ' placeholder='name' />
            <input {...register('email')} type="text" className='rounded px-2 py-1 border border-[#00000030] focus:border-[#00000080] outline-none ' placeholder='email' />
            <input {...register('image')} type="text" className='rounded px-2 py-1 border border-[#00000030] focus:border-[#00000080] outline-none ' placeholder='image url' />
            <input type="submit" className='bg-blue-500 rounded-md px-7 cursor-pointer py-1 font-semibold text-white' />
        </form>
    </div>
  )
}

export default Form;
import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/context/ProductContext'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [products, setProducts] =useContext(ProductContext)
    console.log(products)

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(
            image.trim().length < 5 ||
            title.trim().length < 5 ||
            category.trim().length < 5 ||
            price.trim().length < 1 ||
            description.trim().length < 1
        ){
            alert('Every Input should be of atleast 5 characters')
            return;
        }
        var new_product ={
            id: nanoid(),
            image, title, category, price, description
        }
        setProducts([...products, new_product]);
        localStorage.setItem('products', JSON.stringify([...products, new_product]));
        navigate('/')
    }
  return (
    <form action="" onSubmit={handleSubmit} className='h-scree w-full flex flex-col items-center justify-center gap-5'>
        <h1 className='text-4xl font-bold w-1/2 px-3'>Add New Product</h1>

        <input type="url" 
        className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-1/2'
        placeholder='Enter Image URL'
        onChange={e=>setImage(e.target.value)}
        value={image}
        />
        <input type="text" 
        className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-1/2'
        placeholder='Enter Product Title'
        onChange={e=>setTitle(e.target.value)}
        value={title}
        />
        <div className='w-1/2 flex justify-between'>
            <input type="text" 
            className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-[49%]'
            placeholder='Enter Category'
            onChange={e=>setCategory(e.target.value)}
            value={category}
            />
            <input type="number" 
            className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-[49%]'
            placeholder='Enter Price'
            onChange={e=>setPrice(e.target.value)}
            value={price}
            />
        </div>
        <textarea className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-[49%]' 
        value={description}
        rows="10"
        onChange={e=>setDescription(e.target.value)}
        placeholder='Enter product description here...'
        ></textarea>
        <div className='w-1/2'>
            <button className="after:content-[''] after:bg-sky-300 after:absolute after:h-3 after:w-3 after:bottom-[-50%] after:left-[50%] after:translate-x-[-50%] after:rounded-full hover:after:scale-[1450%] after:transition-transform after:duration-500 after:ease-in-out relative overflow-hidden after:z-[-1] border whitespace-nowrap px-3 py-1 rounded text- border-sky-300 text-sky-600 hover:text-white transition-colors duration-300">
            Add New Product
            </button>
        </div>
    </form>
  )
}

export default Create
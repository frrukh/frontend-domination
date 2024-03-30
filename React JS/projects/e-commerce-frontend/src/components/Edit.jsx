import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/context/ProductContext'
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams()
    const [products, setProducts] =useContext(ProductContext)
    
    const [currentProduct, setcurrentProduct] = useState({
        image: "",
        title: "",
        category: "",
        price: "",
        description: "",
    })

    
    const eventHandler = (e)=>{
        setcurrentProduct({...currentProduct, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        setcurrentProduct(products.filter(elem=>elem.id == id)[0])
    }, [])

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')


    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(
            currentProduct.image.trim().length < 5 ||
            currentProduct.title.trim().length < 5 ||
            currentProduct.category.trim().length < 5 ||
            currentProduct.price.length < 1 ||
            currentProduct.description.trim().length < 1
        ){
            alert('Every Input should be of atleast 5 characters')
            return;
        }
        const pi = products.findIndex(p=>p.id == id)
        const copyData = [...products]
        copyData[pi] = {...products[pi], ...currentProduct}
        setProducts(copyData)
        localStorage.setItem("products", JSON.stringify(copyData))
        navigate('/')
    }
  return (
    <form action="" onSubmit={handleSubmit} className='h-scree w-full flex flex-col items-center justify-center gap-5'>
        <h1 className='text-4xl font-bold w-1/2 px-3'>Add New Product</h1>

        <input type="url" 
        className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-1/2'
        placeholder='Enter Image URL'
        name="image"
        onChange={eventHandler}
        value={currentProduct && currentProduct.image}
        />
        <input type="text" 
        className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-1/2'
        placeholder='Enter Product Title'
        name="title"
        onChange={eventHandler}
        value={currentProduct && currentProduct.title}
        />
        <div className='w-1/2 flex justify-between'>
            <input type="text" 
            className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-[49%]'
            placeholder='Enter Category'
            name="category"
            onChange={eventHandler}
            value={currentProduct && currentProduct.category}
            />
            <input type="number" 
            className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-[49%]'
            placeholder='Enter Price'
            name="price"
            onChange={eventHandler}
            value={currentProduct && currentProduct.price}
            />
        </div>
        <textarea className='bg-zinc-200 outline-none px-3 py-1 text-lg rounded-md w-[49%]' 
        value={currentProduct && currentProduct.description}
        rows="10"
        name="description"
        onChange={eventHandler}
        placeholder='Enter product description here...'
        ></textarea>
        <div className='w-1/2'>
            <button className="after:content-[''] after:bg-sky-300 after:absolute after:h-3 after:w-3 after:bottom-[-50%] after:left-[50%] after:translate-x-[-50%] after:rounded-full hover:after:scale-[1450%] after:transition-transform after:duration-500 after:ease-in-out relative overflow-hidden after:z-[-1] border whitespace-nowrap px-3 py-1 rounded text- border-sky-300 text-sky-600 hover:text-white transition-colors duration-300">
            Update Product
            </button>
        </div>
    </form>
  )
}

export default Edit
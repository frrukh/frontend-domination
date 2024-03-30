import React, { useEffect, useState } from 'react'
import { Await, Link, useLocation, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../utils/context/ProductContext'
import axios from '../utils/axios'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

function ProductDets() {
  const [product, setProduct] = useState(null)


  const {id} = useParams()

  const [ products ] = useContext(ProductContext)

  const navigate = useNavigate()

  // const getSingleProduct = async ()=>{
  //   try {
  //     const {data} = await axios(`/products/${id}`)
  //     setProduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const deleteProduct = (id)=>{
    const remainingProducts = products.filter(elem=>elem.id != id)
    console.log(remainingProducts)
    setProduct(remainingProducts)
    localStorage.setItem('products', JSON.stringify(remainingProducts));
    navigate(-1)
  }

  useEffect(()=>{
    if(products.length) setProduct(()=>products.filter((elem, ind)=>elem.id == id)[0])
    // getSingleProduct()
    
  }, [products])

  return ( product ?
      <div className='h-screen w-full mx-[10%] flex items-center justify-evenly pb-20'>
        <div className='h-[40vmax]'>
            <img className='h-full w-full object-contain' src={product.image} alt="" />
        </div>
          <div className='w-[50%] flex flex-col h-[40%] gap-3'>
              <div className='text-4xl font-semibold'>{product.title}</div>
              <div className='text-gray-400 font-semibold'>{product.category}</div>
              <div className='mt-3 font-bold text-green-600 text-2xl'>$ {product.price}</div>
              <div>{product.description}</div>
              <div className='flex gap-6'>
                  <Link to={`/edit/${product.id}`} className='px-4 py-1 hover:text-white hover:bg-blue-400 rounded border border-blue-400 transition-colors'>Edit</Link>
                  <button onClick={()=>deleteProduct(product.id)} className='px-4 py-1 hover:text-white hover:bg-red-400 rounded border border-red-400 transition-colors'>Delete</button>
              </div>
          </div>
      </div> : <Loading />
  )
}

export default ProductDets
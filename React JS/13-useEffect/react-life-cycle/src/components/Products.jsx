import React, { useEffect, useState } from 'react'
import axios from "../utils/axios" // AXIOS IS OUT SOURCED. CHECK IT OUT.

function Products() {
    const [products, setProducts] = useState([])

    const getData = () =>{
        axios.get("/products")
        .then(data=> setProducts(data.data))
        .catch(err=> console.log(err))
    }

    // React Life Cycle:
        // there are three states in react life cycle.
        // 1) component mounting-(creation):
            // when component is rendered in browser it is created.
        // 2) component updating-(deletion + creation):
            // when component is rendered in browser it is updated.
        // 3) component unmounting-(deletion):
            // when component is removed from browser it is deleted.
    
    // useEffect hook is used to take an action on mounting and unmounting.
    // it takes 2 arguments,first one is a function and second argument is an array that is optional.
    useEffect(()=>{
        // any thing you write in this function will run on mounting.
        console.log(axios)
        console.log("The Products page is mounted i.e created")
            // we can even fetch the products on mounting.
        getData()
        // its return value also takes a function that will be called when the page is mounted i.e deleted.
        return ()=>{
            console.log("The Products page is unmounted i.e deleted.")
        }


        // when any state changes or any change occurs in the view the react RERENDER the COMPONENT in which the change happened. to prevent this RERENDERING of COMPONENT we can pass a second argument to useEffect in which we can pass the thing on the changes of which the COMPONENT should RERENDERED. otherwise the specific tag in which the change happened will be updated. 
    }, [])

    
  return (
    <>
    <div className='flex flex-col gap-5 h-[70vh] overflow-y-scroll bg-blue-200 py-4'>
        {products.length === 0 ? <div className='mx-auto my-60 text-4xl font-bold'>Loading....</div> : products.map((product, index) => (
        <div key={index} className='p-5 bg-sky-800 text-white font-bold text-xl'>{product.title}</div>
        ) )}
    </div>
    <button onClick={getData} className='bg-sky-600 mx-[50%] whitespace-nowrap mt-24 px-6 py-3 rounded-lg font-semibold text-white'>Get Data</button>
    </>
  )
}

export default Products;
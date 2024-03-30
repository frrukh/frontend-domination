import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { useContext } from 'react'
import { ProductContext } from '../utils/context/ProductContext'
import Loading from './Loading'
import axios from '../utils/axios'

function Home() {
  const [products, setProduct] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]); // this will decode the url to normale characters.
  
  const [filteredProduct, setFilteredProduct] = useState(null);

  // const getProductsCategory = async ()=>{
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setFilteredProduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(()=>{
    if(filteredProduct == null || category == "undefined") setFilteredProduct(products)
    
    if (category !== "undefined" ){
      // getProductsCategory()
      setFilteredProduct(products.filter(p=>p.category == category));
    }
  
  }, [category, products]);

  return products==null ? <Loading /> :(
    <>
    <Navbar />
    <div className="h-full w-full bg-red-200a pt-12 px-2 flex flex-wrap gap-3 overflow-y-auto">
      {filteredProduct && filteredProduct.map((elem)=>{
        return <Link key={elem.id} to={`/Product/${elem.id}`} className="hover:text-sky-900 duration-200 min-h-fit max-h-80 border rounded-md shadow-xl card p-4 w-[200px] shrink-0 overflow-hidden flex flex-col items-center">
        <div className=" hover:scale-110 transition-transform duration-300 w-44 h-44">
          <img className="h-full w-full object-contain" src={elem.image} alt="" />
        </div>
        <h1 className="mt-5 font-semibold leading-none leading-tight">{elem.title.length > 50 ? elem.title.slice(0, 50)+'...' : elem.title }</h1>
      </Link>
      })}
    </div>
  </>
  )
}

export default Home
import React, { useContext } from 'react'
import { ProductContext } from '../utils/context/ProductContext'
import { Link } from 'react-router-dom';

function Navbar() {

  const [products] = useContext(ProductContext);
  let uniqueCategories = products.map(elem => elem.category);
  uniqueCategories = [...new Set(uniqueCategories)];

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  }

  return (
    <nav className="h-[80%] w-[20%] h-full bg-zinc-50 flex flex-col items-center gap-2 py-5">
        <Link to="/create" className="border whitespace-nowrap px-3 py-1 rounded text- border-sky-300 text-sky-400">
          Add New Product
        </Link>
        <hr className="w-[80%]" />
        <h1 className="text-xl font-semibold">Category Filter</h1>
        <div className="w-full">
          {uniqueCategories.map((cat, ind)=>(
          <Link key={ind} to={`/?category=${cat}`} className="p-2 w-[100%] whitespace-nowrap inline-block hover:bg-zinc-200 hover:scale-105 transition-all">
            <span style={{backgroundColor: `${color()}`}} className="inline-block h-3 w-3 rounded-full mx-2"></span>
            {cat} 
          </Link>
          ))}
        </div>
      </nav>
  )
}

export default Navbar
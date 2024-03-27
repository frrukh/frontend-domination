import React from 'react'
import axios from 'axios'

function App() {

  const getData = ()=>{
    const url = "https://fakestoreapi.com/products";
    axios.get(url)
    .then(products=>{
      console.log(products.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  
  const sendData = ()=>{
    const url = "https://fakestoreapi.com/products";
    axios.post(url, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    })
    .then(resp => console.log(resp.data))
    .catch(err=>console.log(err));
  }

  return (
    <div className='p-40'>
      <button onClick={getData} className='px-5 py-1 bg-sky-600 text-white rounded-lg'>Get data</button>
      <br />
      <br />
      <button onClick={sendData} className='px-5 py-1 bg-sky-600 text-white rounded-lg'>Send data</button>
      <br />
      <br />
    </div>
  )
}

export default App;
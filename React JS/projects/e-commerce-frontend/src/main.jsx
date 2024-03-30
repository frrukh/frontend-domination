import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './utils/context/ProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </ProductContextProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ReactDOM.createRoot() creates a virtual DOM.
  // it takes a html element present in your index.html to add the content coming from App.jsx in it.
// .render() is used to render this DOM on your web page.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* this is the inner data to render i.e what we imported from App.jsx */}  
  </React.StrictMode>,
)

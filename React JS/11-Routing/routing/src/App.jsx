import React from 'react'
import Nav from './components/Nav';
import Routing from './utils/Routing';


const App = () => {
  return (
    // after doing all the things we shifted the navbar to a new component Nav.jsx.
    // and shifted our routes to a new component Routing.jsx which is not in components folder, which is in utils folder because to clean our code we create a new folder in src folder to prevent the viewing components to mix in with boiler plate codes and etc.
    <>
        <Nav />
        
        <Routing />
    </>
  )
}

export default App;
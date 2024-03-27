import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import Login from "../components/Login";


function Routing() {
  return (
    // to assign the pages to the routes we can use multiple Route tags and wrap these tags with Routes tag.
    // Route tag has two attributes/props path and element
    <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/User' element={ <User /> } />
            <Route path='/Login' element={ <Login /> } />
    </Routes>
  )
}

export default Routing;
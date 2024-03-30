import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";


function App() {
  var { pathname, search } = useLocation();
  return (
    <div className="h-screen flex">
      {(pathname !== '/' || search.length > 0)&&(
        <Link to="/" className="absolute font-bold text-blue-400 left-[20%] top-[2%]">Home</Link>
      )}
      <Routing />
    </div>
  );
}

export default App;

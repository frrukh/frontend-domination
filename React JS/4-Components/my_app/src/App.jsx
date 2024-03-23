import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {
  return (
    // we can only return a single element, to return multiple elements we need to wrap them all in a single div or <></>
    <div>

    {/* we can write in both way i.e. with self closing and with closing tag. */}
    <Navbar></Navbar> {/* not-preferred */}
    <Hero />
    <Card />
    <Footer />
    </div>
  )
}

export default App;
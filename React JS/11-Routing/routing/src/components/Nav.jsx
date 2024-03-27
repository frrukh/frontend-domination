import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    // Link tag is given by react-router-dom library and used as an anchor tag without refreshing the page.
    // in Link tag we use to instead of href attribute.

    // In order to use the links for navbar react-router-dom provides us another tag i.e NavLink.
    <nav>
        <p className='text-center font-extrabold bg-red-500'>Link</p>
        <div className='flex p-10 gap-16 font-bold text-2xl'>
            <Link to="/">Home</Link>
            <Link to="/User">User</Link>
            <Link to="/Login">Login</Link>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <p className='text-center font-extrabold bg-orange-400'>NavLink</p>

        {/* In nav link we can style the specific link of page on which we are. */}
        {/* there are three ways to style the current page link. */}

        <div className='flex p-10 gap-16 font-bold text-2xl'>

        {/* 1) by style tag */}
            {/* react-router-dom provides a callback function in style tag through which we can check if the current page is of this element or not. */}
            <NavLink style={(data)=>{
                console.log(data); // this gives three keys with boolean values: isActive, isPending, isTransitioning. we can check if isActive is true or not.
                return {
                    color : data.isActive ? "tomato" : "",
                    fontWeight: data.isActive ? "900" : "",
                 }
            }} to="/">Home</NavLink>

            {/* 2) by class */}
                {/* it also gives us a callback in class. */}
            <NavLink className={(data)=>{
                // return data.isActive ? "text-orange-500 font-extrabold" : "" // instead of this we can use this :

                return [
                    data.isActive ? "text-orange-500" : "",
                    data.isActive ? "font-extrabold" : ""
                ].join(" ")

            }} to="/User">User</NavLink>


            {/* 3) by child element */}
            <NavLink to="/Login">
                {data=>{
                    return <span className={
                        data.isActive ? [
                            "text-orange-500", "font-extrabold"
                        ].join(" ") : ""
                    }>Login</span>
                }}
            </NavLink>
        </div>
        <br />
        <br />
        <br />
    </nav>
  )
}

export default Nav;
import { NavLink } from "react-router-dom";
import React from 'react'

function Nav() {
  return (
    <nav className="p-6 font-semibold flex gap-12 text-2xl">
        <NavLink className={e=>e.isActive?["text-orange-500", "font-extrabold"].join(" "):""} to="/">Home</NavLink>
        <NavLink className={e=>e.isActive?["text-orange-500", "font-extrabold"].join(" "):""} to="/user">User</NavLink>
        <NavLink className={e=>e.isActive?["text-orange-500", "font-extrabold"].join(" "):""} to="/about">About</NavLink>
    </nav>
  )
}

export default Nav
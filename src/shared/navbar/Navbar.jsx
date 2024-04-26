import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const links=<>
  <NavLink to='/'>HOME</NavLink>
  <NavLink to='/allTourist'>All Tourists Spot</NavLink>
  <NavLink to='/TouristsSpotst'>Add Tourists Spot</NavLink>
  <NavLink to='/myList'>My List</NavLink>

  </>
  return (
    <div>
    <div className="navbar bg-white mb-12">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
 {links}
        </ul>
      </div>
      <button className="btn btn-outline btn-success">MALAYSIA</button>

    </div>
    <div className="navbar-center hidden lg:flex">
<ul>

{links}
</ul>
    </div>
    <div className="navbar-end">
  <Link to='/login'>  <button className="btn btn-outline btn-success">LOGIN</button>
  </Link>
    </div>
  </div>
    </div>
  )
}

export default Navbar

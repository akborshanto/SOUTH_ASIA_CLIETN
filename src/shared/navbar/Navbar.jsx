import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../hook/useContext/UseContext'
import { CiUser } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
const Navbar = () => {
/* theme */
const[theme,setTheme]=useState('light')

useEffect(()=>{
localStorage.setItem('theme',theme)
const localTheme=localStorage.getItem('theme')
document.querySelector('html').setAttribute('data-theme',localTheme)


},[theme])

const handleTheme=e=>{

if(e.target.checked){
  setTheme("synthwave")
}else{
  setTheme("light")
}
}
console.log(theme)
const {user,logOut}=useContext(AuthContext)
console.log(user)

/* LOG OUT */
const handleLogout=()=>{
  logOut()
  .then(result=>console.log(result))
  .catch(err=>console.log(err))
}
  const links=<>
  <li>
  <NavLink to='/' className={({isActive})=>isActive ? " bg-gradient-to-r from-emerald-500 to-emerald-900  text-white":" border"}>HOME</NavLink>

  </li>


<li>
<NavLink to='/allTourist' className={({isActive})=>isActive?"bg-gradient-to-r from-emerald-500 to-emerald-900  text-white":" border" }>All Tourists Spot</NavLink>
</li>
  
<li>

{
  user &&   <NavLink to='/TouristsSpotst' className={({isActive})=>isActive?"bg-gradient-to-r from-emerald-500 to-emerald-900  text-white":" border" } >Add Tourists Spot</NavLink>
}</li>



<li>


{
  user &&   <NavLink to='/myList' className={({isActive})=>isActive?"bg-gradient-to-r from-emerald-500 to-emerald-900  text-white":" border" }>My List</NavLink>

}
</li>
  </>
  return (
    <div>
    <div className="navbar bg-white mb-12 my-4 ">
    <div className="navbar-start">

      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow border-none rounded-box w-52"
      >
        {links}
      </ul>
      </div>
      <button className="btn btn-outline btn-success  text-14px ">SOUTHEAST <span>ASIA</span></button>

    </div>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{links}</ul>
  </div>
    <div className="navbar-end">

      <input type="checkbox" className="toggle toggle-success mx-6" onClick={handleTheme} />
    
      <button className="bg-gradient-to-r from-teal-400 to-gray-800 rounded-full p-0 lg:p-2  mr-2 lg:mr-4 text-white">
      {user ? (
        <img
          src={ user?.photoURL ||'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1713332757~exp=1713336357~hmac=b6020d1aa8ca33824997fd316fa614c2beac7f75a202b0d1015d0c779eacaf6e&w=740'}
          className=" w-8  h-8 rounded-full"
          title={user ? user?.displayName:"not"}
        
        ></img>
      ) : (
        <IoMdContact className=' w-8 h-8 lg:w-8 lg:h-8' />
      )}
    </button>
    {user ? (
      <button
        onClick={() => logOut()}
        className="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white font-bold py-2 px-2 lg:px-4
         border-b-4 border-green-700 hover:border-green-500 rounded"
      >
        logout
      </button>
    ) : (
      <NavLink to="login">
        <button class="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white font-bold py-2 px-2 lg:px-4 border-b-4 border-green-700
         hover:green-blue-500 rounded">
          SignIn
        </button>
      </NavLink>
    )}


    </div>
  </div>
    </div>
  )
}

export default Navbar

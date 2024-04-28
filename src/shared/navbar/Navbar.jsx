import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../hook/useContext/UseContext'
import { CiUser } from "react-icons/ci";
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
  <NavLink to='/'>HOME</NavLink>

  <NavLink to='/allTourist'>All Tourists Spot</NavLink>
  {
    user &&   <NavLink to='/TouristsSpotst'>Add Tourists Spot</NavLink>
  }

{
  user &&   <NavLink to='/myList'>My List</NavLink>

}
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
    <div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Remember me</span> 
      <input type="checkbox" className="toggle toggle-secondary" onClick={handleTheme} />
    </label>
  </div>
{user? <img src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1714103071~exp=1714106671~hmac=2232a3af0dfc98faf89af349f906681c2d6ac38b7a2ac969a16bda89cf72c04d&w=740' className="w-20 rounded-full"  title={user?.displayName}></img>:<CiUser />}
{
user?   <button className="btn btn-outline btn-success" onClick={logOut}>LOGOUT</button>:
 <Link to='/login'>  <button className="btn btn-outline btn-success">LOGIN</button>
</Link>

}



    </div>
  </div>
    </div>
  )
}

export default Navbar

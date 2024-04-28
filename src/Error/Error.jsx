import React from 'react'
import img from '../../src/assets//img/6373669.jpg'
import { Link } from 'react-router-dom'
const Errors = () => {
  return (
    <div>
	<div className="hero min-h-screen" style={{backgroundImage: 'url(6373669.jpg)'}}>
	<div className="hero-overlay bg-opacity-10"></div>
	<div className="hero-content text-center text-neutral-content">
	  <div className="max-w-md">
		
		<Link to='/'>
		<button className="btn  btn-success  btn-wide text-white">GO TO HOME</button>
		</Link>
	  </div>
	</div>
  </div>
    </div>
  )
}

export default Errors

import React from 'react'
import img from '../../src/assets//img/6373669.jpg'
import { Link } from 'react-router-dom'
const Errors = () => {
  return (
    <div className=''>



	<section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-lg">
		<img src={img} alt="" />
		<Link to='/'>
		<button className="btn btn-outline btn-accent btn-wide text-white">GO TO HOME</button>
		</Link>
	</div>
</section>







    </div>
  )
}

export default Errors

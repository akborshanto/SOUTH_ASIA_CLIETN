import React from 'react'
import { Link } from 'react-router-dom'

const Regester = () => {
  return (
    <div>
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
	<h1 className="text-2xl font-bold text-center">REGESTER</h1>
	<form noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="Email" className="block text-gray-400">Email</label>
			<input type="text" name="Email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
	</form>

	<p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
		<Link to='/login'><a rel="noopener noreferrer" href="#" className="underline text-gray-100">LogIn</a></Link>
	</p>
</div>
    </div>
  )
}

export default Regester

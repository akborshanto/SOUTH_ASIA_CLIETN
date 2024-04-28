import React from 'react'
import { Link } from 'react-router-dom'

const TouristSpotCard = ({tour}) => {

const {_id,photo,country_Name,ToureistName,location,travel_time,description,average_cost,totaVisitorsPerYear,Email,Name}=tour;

  return (
    <div className=''>
      

    <div className="max-w-xs rounded-md shadow-md bg-gradient-to-r from-teal-600 to-teal-300 text-white p-5 mx-auto md:mx-auto lg:mx-0">
	<img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-56 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8 ">
		<div className="space-y-2">

			<h1 className="text-3xl font-semibold tracking-wide">{country_Name}</h1>
			<p className="text-white"> Tourist:<span className='text-gray-600'>{ToureistName}</span></p>
			<h2>visitor: <span className='text-gray-600'>{totaVisitorsPerYear}</span></h2>
		
			<p>Time::<span className='text-gray-600'>{travel_time}</span></p>

	
		
			<p >Location:<span className='text-gray-600'>{location}</span></p>
		</div>
	<Link to={`/viewDetail/${_id}`}>	<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide  text-white rounded-md bg-gradient-to-r from-cyan-200 to-cyan-400 text-gray-900">View Details</button></Link>
	</div>
</div>

    </div>
  )
}

export default TouristSpotCard

import React from 'react'
import { Link } from 'react-router-dom'

const TouristSpotCard = ({tour}) => {

const {_id,photo,country_Name,ToureistName,location,travel_time,description,average_cost,totaVisitorsPerYear,Email,Name}=tour;

  return (
    <div className=''>
      

    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">

			<h2 className="text-3xl font-semibold tracking-wide">{country_Name}</h2>
			<p className="text-gray-100">{ToureistName}</p>
			<p>{totaVisitorsPerYear}</p>
			<p>{travel_time}</p>
			<p>{location}</p>
		</div>
	<Link to={`/viewDetail/${_id}`}>	<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">View Details</button></Link>
	</div>
</div>

    </div>
  )
}

export default TouristSpotCard

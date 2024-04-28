import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import UseTitle from './../../hook/useTitle/UseTitle';

const ViewDetail = () => {

  const {id}=useParams()
  const [spot,setSPot]=useState({})
  console.log(id)

  useEffect(()=>{

fetch(`http://localhost:5000/singleSpot/${id}`)
.then(res=>res.json())
.then(data=>setSPot(data))

  },[id])
  const {_id,photo,country_Name,ToureistName,location,travel_time,description,average_cost,totaVisitorsPerYear,Email,Name,seasonality}=spot;

  return (
    <div className='py-16'>
    <div className="max-w-lg p-4 shadow-md bg-gradient-to-r from-teal-600 to-teal-300 text-white p-5 mx-auto rounded-lg">
    <UseTitle heading="VIEW DETAILS OF TOURIST"></UseTitle>
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100 text-2xl">CountryName:{country_Name}</a>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />

		</div>
		<div className="flex flex-col justify-between p-6 space-y-8 ">
		<div className="space-y-2">

			<h3 className="text-white"> TouristName:<span className='text-gray-600 text-2xl'>{ToureistName}</span></h3>
      <h3>TotalvisitorPerYear:<span className='text-gray-600 text-xl'>{totaVisitorsPerYear}</span></h3>

			<h3>Trave_Time::<span className='text-gray-600 text-2xl text-xl'>{travel_time}</span></h3>

	
		
			<h3 >Location:<span className='text-gray-600 text-xl lg:text-2xl'>{location}</span></h3>
			<h3 >Seasonality:<span className='text-gray-600 text-xl lg:text-2xl'>{seasonality}</span></h3>
      
			<h3 >Description:<span className='text-gray-600 text-xl'>{description}</span></h3>
      <h2>Name:<span className='text-gray-600 text-xl lg:text-2xl'>{Name}</span></h2>
      <h2>Email:<span className='text-gray-600 text-xl lg:text-2xl'>{Email}</span></h2>

      
      </div>
      
 
	</div>
	</div>
</div>



    </div>
  )
}

export default ViewDetail

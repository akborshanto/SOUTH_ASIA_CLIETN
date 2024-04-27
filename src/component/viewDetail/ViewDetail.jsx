import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ViewDetail = () => {

  const {id}=useParams()
  const [spot,setSPot]=useState({})
  console.log(id)

  useEffect(()=>{

fetch(`http://localhost:5000/singleSpot/${id}`)
.then(res=>res.json())
.then(data=>setSPot(data))

  },[id])
  const {_id,photo,country_Name,ToureistName,location,travel_time,description,average_cost,totaVisitorsPerYear,Email,Name}=spot;

  return (
    <div>
    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">{country_Name}</h2>
        <p className="text-gray-100">{description}</p>
      </div>
      <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>
    </div>
  </div>



    </div>
  )
}

export default ViewDetail

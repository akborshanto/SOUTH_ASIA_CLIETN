import React, { useEffect, useState } from 'react'
import TouristSpotCard from './TouristSpotCard'

const TouristSpot = () => {
const [tourist,setTourist]=useState([])
useEffect(()=>{
fetch('http://localhost:5000/addSpot')
.then(res=>res.json())
.then(data=> setTourist(data))

},[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {

tourist?.slice(0,6).map(tour=><TouristSpotCard tour={tour} key={Math.random()}></TouristSpotCard>)
    }
    </div>
  )
}

export default TouristSpot

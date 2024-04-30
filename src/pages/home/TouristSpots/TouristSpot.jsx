import React, { useEffect, useState } from 'react'
import TouristSpotCard from './TouristSpotCard'

const TouristSpot = () => {
const [tourist,setTourist]=useState([])
useEffect(()=>{
fetch('https://southest-asia-server.vercel.app/allSpot')
.then(res=>res.json())
.then(data=> setTourist(data))

},[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center '>
    {

tourist?.slice(0,6).map(tour=><TouristSpotCard tour={tour} key={Math.random()}></TouristSpotCard>)
    }
    </div>
  )
}

export default TouristSpot

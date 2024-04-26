import React from 'react'
import UseTitle from '../../hook/useTitle/UseTitle'

import HomeSlider from './slider/HomeSlider'
import TouristSpot from './TouristSpots/TouristSpot'

const Home = () => {
  return (
    <div>


   
    <HomeSlider></HomeSlider>

<UseTitle heading="Tourists Spots " title={`Located between two and seven degrees north of the Equator Malaysia is formed by 13 states – Kelantan`}></UseTitle>

<TouristSpot></TouristSpot>
    </div>
  )
}

export default Home

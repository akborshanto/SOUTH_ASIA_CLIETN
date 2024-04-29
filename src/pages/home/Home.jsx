import React from 'react'
import UseTitle from '../../hook/useTitle/UseTitle'

import HomeSlider from './slider/HomeSlider'
import TouristSpot from './TouristSpots/TouristSpot'
import CountriesSection from './countries-section/CountriesSection'
import About from './about/About'
import BestPlace from './bestPlaces/BestPlace'

const Home = () => {
  return (
    <div className='p-4'>


   
    <HomeSlider></HomeSlider>

<UseTitle heading="Tourists Spots " title={`Located between two and seven degrees north of the Equator Malaysia is formed by 13 states – Kelantan`}></UseTitle>

<TouristSpot></TouristSpot>
<CountriesSection></CountriesSection>
<About></About>
<BestPlace></BestPlace>
<CountriesSection></CountriesSection>
    </div>
  )
}

export default Home

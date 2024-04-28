import React from 'react'
import UseTitle from '../../../hook/useTitle/UseTitle'

const About = () => {
  return (
    <div className='py-6'>
    <UseTitle heading="ABOUT" title="It is a place of one of the world's oldest civilizations and also, currently, one of the most vibrant and important centers of global culture, " ></UseTitle>
    <section className=" bg-[#6ab8b4] text-white rounded-lg">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://img.freepik.com/free-photo/world-map-global-international-globalisation-concept_53876-120362.jpg?t=st=1714271445~exp=1714275045~hmac=d0eb9bf6d330fe10403874b070590a741fac8f39711b35e5f687c9c7a6812a9a&w=1060" alt="" className=" rounded-full object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl p-5">ABOUT
		</h1>

            South Asia is a subregion of Asia, located between the Himalaya mountains to the north and the Indian Ocean and the Bay of Bengal to the south
		

		</div>
	</div>
</section>
    </div>
  )
}

export default About

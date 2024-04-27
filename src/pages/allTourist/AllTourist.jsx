import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const AllTourist = () => {
  const loader=useLoaderData()
  console.log(loader)
  return (
    <div>

    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn m-1">Averest Cost</div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>


   {
    loader.map(sp=> 

      <div key={Math.random()} className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
    <img src={sp.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">{sp.name}</h2>
        <p className="text-gray-100">{sp.description}</p>
      </div>

<Link to={`/viewDetail/${sp._id}`}>

<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>

</Link>   
    </div>

        
      </div>


)
   }

   
    </div>
  )
}

export default AllTourist

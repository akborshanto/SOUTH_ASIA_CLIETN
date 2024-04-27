import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const MyList = () => {
  const loader=useLoaderData()
  //const {_id,photo,country_Name,ToureistName,location,travel_time,description,average_cost,totaVisitorsPerYear,Email,Name}=spot;

  return (
    <div>
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Country_Name</th>
          <th>Travel_time</th>
          <th></th>
        </tr>
      </thead>
{

loader.map(list=>
  <tbody key={Math.random()}>
    {/* row 1 */}
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>




      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={list.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{list.ToureistName}</div>
            <div className="text-sm opacity-50">{list.totaVisitorsPerYear}</div>
          </div>
        </div>
      </td>
      <td>
      {list.country_Name}
        <br/>
        <span className="badge badge-ghost badge-sm">{list.location}</span>
      </td>
      <td>{list.travel_time}</td>
      <th>
  <Link>
  <button className="btn btn-ghost btn-xs">Update</button> <br />
  </Link>
  <Link>
  <button className="btn btn-ghost btn-xs">Delete</button> <br />
  </Link>

      
      </th>
    </tr>
   
</tbody>)

}


    </table>
  </div>
    </div>
  )
}

export default MyList

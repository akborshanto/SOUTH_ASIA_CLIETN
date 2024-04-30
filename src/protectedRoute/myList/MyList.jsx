import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../hook/useContext/UseContext";
import UseTitle from "../../hook/useTitle/UseTitle";
import Swal from 'sweetalert2'

const MyList = () => {
  const { user } = useContext(AuthContext);
const [control,setControl]=useState(false)
const [tour,setTour]=useState([])


  useEffect(() => {
    fetch(`https://southest-asia-server.vercel.app/myList/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
    setTour(data)
    })

  }, [user,control]);


const handleDelete=(id)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to DELETE this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://southest-asia-server.vercel.app/delete/${id}`,{

      method:"DELETE"
      
      }).then(res=>res.json())
      .then(data=>{
        if(data.deletedCount >0){

          setControl(!control)
          Swal.fire({
            title: "Deleted!",
            text: "Your LIST has been deleted.",
            icon: "success"
          });
        
        }
  

      })




    }
  });











//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to DELETE this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
//   })
// fetch(`http://localhost:5000/delete/${id}`,{


}


  return (
    <div className="">
      <UseTitle heading="MY ADD TOURIST  LIST "></UseTitle>
      <div className="overflow-x-auto my-8">


    {    <table className="table italic">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-xl font-extralight">COUNTRY </th>
              <th className="text-xl font-extralight">TRAVEL TIME</th>
              <th className="text-xl font-extralight">TOTAL VISITOR</th>

              <th className="text-xl font-extralight">TOTAL COST</th>

              <th className="text-xl font-extralight">DETAILS</th>

              <th></th>
            </tr>
          </thead>
          {tour?.map((list) => (
            <tbody key={Math.random()} className=" font-se ">
              {/* row 1 */}
              <tr>
                <th></th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-24 mask mask-hexagon">
                        <img
                          src={list?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl">
                        {list?.country_Name}
                      </div>
                      <div className="text-sm opacity-50">{list?.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <span className=" text-2xl">{list?.travel_time}</span>
                </td>
                <td className="text-2xl">{list.totaVisitorsPerYear}</td>
                <td className="text-2xl">{list?.average_cost}</td>
                <th>
                  <Link to={`/updateSpot/${list._id}`}>
                    <button className="btn hover:bg-[#AADDE5] hover:transition-shadow text-white bg-blue-600 my-4 ">
                      Update
                    </button>{" "}
                    <br />
                  </Link>
                  <Link>
                    <button
                      className="btn hover:bg-[#AADDE5] hover:transition-shadow text-white bg-red-600   "
                      onClick={() => handleDelete(list._id)}
                    >
                      Delete
                    </button>{" "}
                    <br />
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>}
      </div>
    </div>
  );
};

export default MyList;

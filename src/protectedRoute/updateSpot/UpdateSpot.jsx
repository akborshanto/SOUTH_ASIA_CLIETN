import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Update = () => {
  const loader=useLoaderData()
  const {id}=useParams()
console.log(id)
  const updateSpot=(e)=>{
    e.preventDefault()
    const form=e.target;
    const photo=form.photo.value;
    const country_Name=form.country_Name.value;
    const ToureistName=form.ToureistName.value;
    const location=form.location.value;
    
    const description=form.description.value;
    const average_cost=form.average_cost.value;
    const seasonality=form.seasonality.value;
    const travel_time=form.travel_time.value;
    const totaVisitorsPerYear=form.totaVisitorsPerYear.value;

    const AddSpot={photo,country_Name,ToureistName,location,description,average_cost,seasonality,travel_time,totaVisitorsPerYear}
/* update  */
fetch(`http://localhost:5000/updateSpot/${id}`,{
  method:"PUT",
  headers:{'content-type':'application/json'},
  body:JSON.stringify(AddSpot)

})
.then(res=>res.json())
.then(data=> {
  toast("success fully")
})


    /* send data to the sereber */
/* send data to the sereber */
// fetch(`http://localhost:5000/addSpot/${id}`,{
//   method:"PUT",
//   headers:{'content-type':'application/json'},
//   body:JSON.stringify(AddSpot)
// })
// .then(res=>res.json())
// .then(data=>{
//   console.log(data)
//   toast("successfully Added Spot")

// })
      }
  return (
    <div>
    <div>
    <div className="hero min-h-screen">
    <ToastContainer position="top-center" />
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">UPDATE TOURIEST SPOT</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={updateSpot}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input name='photo' type="text"  defaultValue={loader.photo}   placeholder="photo" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">ToureistName</span>
            </label>
            <input name='ToureistName' type="text"  defaultValue={loader.ToureistName}  placeholder="ToureistName" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">country_Name</span>
            </label>
            <input name='country_Name' type="text"  defaultValue={loader.country_Name}  placeholder="country_Name" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <input name='location' type="text"  defaultValue={loader.location}  placeholder="location" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input name='description' type="text"  defaultValue={loader.description}   placeholder="description" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">average_cost</span>
            </label>
            <input name='average_cost' type="text"  defaultValue={loader.average_cost}  placeholder="average_cost" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">seasonality</span>
            </label>
            <input name='seasonality' type="text"  defaultValue={loader.seasonality}   placeholder="seasonality" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">travel_time</span>
            </label>
            <input name='travel_time' type="text"  defaultValue={loader.travel_time}   placeholder="travel_time" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">totaVisitorsPerYear</span>
            </label>
            <input name='totaVisitorsPerYear' type="text"  defaultValue={loader.totaVisitorsPerYear}   placeholder="totaVisitorsPerYear" className="input input-bordered" required />
          </div>
         

         
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update SPOT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Update

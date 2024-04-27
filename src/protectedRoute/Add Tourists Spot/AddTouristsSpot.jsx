import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTouristsSpot = () => {


  const addTouristSpot=(e)=>{
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
const Email=form.Email.value;
const Name=form.Name.value;
const AddSpot={photo,country_Name,ToureistName,location,description,average_cost,seasonality,travel_time,totaVisitorsPerYear,Email,Name}
console.log(AddSpot)
/* send data to the sereber */
fetch('http://localhost:5000/addSpot',{
  method:"POST",
  headers:{'content-type':'application/json'},
  body:JSON.stringify(AddSpot)
})
.then(res=>res.json())
.then(data=>{
  toast("successfully Added Spot")

})

  }
  return (
    <div>
    <div className="hero min-h-screen">
    <ToastContainer position="top-center" />
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">ADD TOURIEST SPOT</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={addTouristSpot}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input name='photo' type="text" placeholder="photo" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">ToureistName</span>
            </label>
            <input name='ToureistName' type="text" placeholder="ToureistName" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">country_Name</span>
            </label>
            <input name='country_Name' type="text" placeholder="country_Name" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <input name='location' type="text" placeholder="location" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input name='description' type="text" placeholder="description" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">average_cost</span>
            </label>
            <input name='average_cost' type="text" placeholder="average_cost" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">seasonality</span>
            </label>
            <input name='seasonality' type="text" placeholder="seasonality" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">travel_time</span>
            </label>
            <input name='travel_time' type="text" placeholder="travel_time" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">totaVisitorsPerYear</span>
            </label>
            <input name='totaVisitorsPerYear' type="text" placeholder="totaVisitorsPerYear" className="input input-bordered" required />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='Email' type="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='Name' type="text" placeholder="Name" className="input input-bordered" required />
          </div>
         
          <div className="form-control mt-6">
            <button className="btn btn-primary">ADD SPOT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default AddTouristsSpot

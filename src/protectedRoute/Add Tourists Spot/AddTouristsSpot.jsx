import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseTitle from "./../../hook/useTitle/UseTitle";
import { AuthContext } from "../../hook/useContext/UseContext";
const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);

  const addTouristSpot = (e) => {
    e.preventDefault();
    const email = user.email;
    const form = e.target;
    const photo = form.photo.value;
    const country_Name = form.country_Name.value;
    const ToureistName = form.ToureistName.value;
    const location = form.location.value;

    const description = form.description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const Email = form.Email.value;
    const Name = form.Name.value;
    const AddSpot = {
      photo,
      country_Name,
      ToureistName,
      location,
      description,
      average_cost,
      seasonality,
      travel_time,
      totaVisitorsPerYear,
      Email,
      Name,
      email,
    };

console.log(AddSpot)

/* POST METHOD✅✅💛❤✅💛❤ */

fetch('http://localhost:5000/addTourism',{


method:"POST",
headers:{'content-type':'application/json'},
body:JSON.stringify(AddSpot)
})
.then(res=>res.json())
.then(data=>{
if(data?.insertedId){

toast.success("SUCCESSFULLY ADDED ")
}

})


/* 🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩 */
/*  */
    /* send data to the sereber */
    // fetch("http://localhost:5000/addSpot", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(AddSpot),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast("successfully Added Spot");
    //   });


// /* ===========MYLIST============= */
// fetch('http://localhost:5000/addPD',{

// method:"POST",
// headers:{"Content-Type": "application/json"},
// body:JSON.stringify(AddSpot)
// })
// .then(res=>res.json())
// .then(data=>console.log(data))




//

};


  return (
    <div>

      <ToastContainer position="top-center" />

      <section className="p-6 bg-[#6ab8b4] text-white">
        <UseTitle heading="ADD TOURIEST SPOT"></UseTitle>

        <form
          noValidate=""
          action=""
          className=" text-white container flex flex-col mx-auto space-y-12"
          onSubmit={addTouristSpot}
        >







          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-[#6ab8b4] text-gray-400">








            <div className="col-span-full sm:col-span-3">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input 
                name="photo"
                type="text"
                placeholder="photo"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="label">
                <span className="label-text">ToureistName</span>
              </label>
              <input
                name="ToureistName"
                type="text"
                placeholder="ToureistName"
                className="  w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3 ">
              <label className="label">
                <span className="label-text">country_Name</span>
              </label>
              <input
                name="country_Name"
                type="text"
                placeholder="country_Name"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3 ">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="location"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="description"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">average_cost</span>
              </label>
              <input
                name="average_cost"
                type="text"
                placeholder="average_cost"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">seasonality</span>
              </label>
              <input
                name="seasonality"
                type="text"
                placeholder="seasonality"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">travel_time</span>
              </label>
              <input
                name="travel_time"
                type="text"
                placeholder="travel_time"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">totaVisitorsPerYear</span>
              </label>
              <input
                name="totaVisitorsPerYear"
                type="text"
                placeholder="totaVisitorsPerYear"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="Name"
                type="text"
                placeholder="Name"
                className=" w-full input input-bordered"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="Email"
                type="email"
                placeholder="Email"
                className=" w-full input input-bordered"
                required
              />
            </div>
          </div>

          <button className="block w-full p-3 text-center rounded-sm hover:bg-[#AADDE5] hover:transition-shadow text-white bg-blue-600 ">
            ADD SPOT
          </button>
        </form>
      </section>

      {/* ======================================= */}

      <div className="hero min-h-screen">
        {/*     <div className="hero-content flex-col lg:flex-row-reverse">
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
            <input name='ToureistName' type="text" placeholder="ToureistName" className="  w-full input input-bordered" required />
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
    </div> */}
      </div>
    </div>
  );
};

export default AddTouristsSpot;

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



/* ALL DATA */
fetch('http://localhost:5000/allSpot',{


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


/* POST METHOD MY LIST✅✅💛❤✅💛❤ */

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
              <textarea        name="description"
              type="text" className="textarea textarea-info w-full input input-bordered" placeholder="descreption.."      required></textarea>

            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text">average_cost</span>
              </label>
              <input
                name="average_cost"
                type="number"
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
                type="time"
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
                type="number"
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
                defaultValue={user?.email}
                disabled
                required
              />
            </div>
          </div>

          <button className="block w-full p-3 text-center rounded-sm hover:bg-[#AADDE5] hover:transition-shadow text-white bg-blue-600 ">
            ADD SPOT
          </button>
        </form>
      </section>

    
    </div>
  );
};

export default AddTouristsSpot;

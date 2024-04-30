import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseTitle from "../../hook/useTitle/UseTitle";
const Update = () => {
  const loader = useLoaderData();
  const { id } = useParams();
  const [updateTour, setUpdateTour] = useState({});

  useEffect(() => {

    fetch(`http://localhost:5000/singleUpdate/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateTour(data);
      });
  }, [id]);




  const updateSpot = (e) => {
    e.preventDefault();

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
    };


fetch(`http://localhost:5000/AllUpdate/${id}`,{
  method:"PUT",
  headers:{'content-type':'application/json'},
  body:JSON.stringify(AddSpot)
})
.then(res=>res.json())
.then(data=>{
console.log(data)
  if (data.modifiedCount > 0) {
        console.log(data);
       toast("success fully UPDATED");
     }

})










    /* .✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */
    /* update  */
    // fetch(`http://localhost:5000/updateSpot/${id}`, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(AddSpot),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       console.log(data);
    //       toast("success fully");
    //     }
    //   });

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
  };
  return (
    <div>
      <ToastContainer position="top-center" />

      <section className="p-6 bg-[#6ab8b4] text-white">
        <UseTitle heading="UPDATE TOURIEST SPOT"></UseTitle>

        <form
          noValidate=""
          action=""
          className=" text-white container flex flex-col mx-auto space-y-12"
          onSubmit={updateSpot}
        >


        <div className="col-span-full sm:col-span-3 text-center  py-4 lg:py-8">
        <label className="label">
          <h2 className="label-text text-xl font-bold  mx-auto">Country_Name</h2>
        </label>
        <select
          className="select select-info w-full max-w-xs  text-gray-400"
          name="country_Name"
          defaultValue={updateTour.country_Name}
        >
          <option disabled >Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Thailand">Thailand</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Cambodia">Cambodia</option>
        </select>
      </div>


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
                defaultValue={updateTour.photo}
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
                defaultValue={updateTour.ToureistName}
              />
            </div>
   {/*          <div className="col-span-full sm:col-span-3 ">
              <label className="label">
                <span className="label-text">country_Name</span>
              </label>
              <input
                name="country_Name"
                type="text"
                placeholder="country_Name"
                className="w-full input input-bordered"
                required
                defaultValue={updateTour.country_Name}
              />
            </div>
 */}
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
                defaultValue={updateTour.description}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <input
                name="location"
                type="text"
                defaultValue={updateTour.location}
                placeholder="location"
                className="input input-bordered"
                required
              />
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
                defaultValue={updateTour.average_cost}
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
                defaultValue={updateTour.seasonality}
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
                defaultValue={updateTour.travel_time}
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
                defaultValue={updateTour.totaVisitorsPerYear}
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update SPOT</button>
          </div>
        </form>
      </section>

      {/*    <div>
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
            <input name='seasonality' type="text"  defaultValue={loader.seasonality}    placeholder="seasonality" className="input input-bordered" required />
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
          </div>     <div className="form-control mt-6">
            <button className="btn btn-primary">Update SPOT</button>
          </div>      <div className="form-control mt-6">
            <button className="btn btn-primary">Update SPOT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>

 */}
    </div>
  );
};

export default Update;

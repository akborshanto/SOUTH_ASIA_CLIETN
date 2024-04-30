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
    // const country_Name = form.country_Name.value;
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

    console.log(AddSpot);

    /* ALL DATA */
    fetch("https://southest-asia-server.vercel.app/allSpot", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(AddSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("SUCCESSFULLY ADDED ");
        }
      });

    /* POST METHOD MY LIST✅✅💛❤✅💛❤ */

    fetch("https://southest-asia-server.vercel.app/addTourism", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(AddSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("SUCCESSFULLY ADDED ");
        }
      });
  };

  return (
    <div>
      <ToastContainer position="top-center" />

      <section className="p-6 bg-[#6ab8b4] text-white my-8 ">
        <UseTitle heading="ADD TOURIEST SPOT"></UseTitle>

        <form
          noValidate=""
          action=""
          className=" text-white container flex flex-col mx-auto space-y-12"
          onSubmit={addTouristSpot}
        >

        <div className="col-span-full sm:col-span-3 text-center  py-4 lg:py-8">
        <label className="label">
          <h2 className="label-text text-xl font-bold  mx-auto">Country_Name</h2>
        </label>
        <select
          className="select select-info w-full max-w-xs  text-gray-400"
          name="country_Name"
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
                <span className="label-text  text-xl font-bold">Photo</span>
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
                <span className="label-text  text-xl font-bold">ToureistName</span>
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
                <span className="label-text text-xl font-bold">location</span>
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
                <span className="label-text text-xl font-bold">Short description</span>
              </label>
              <textarea
                name="description"
                type="text"
                className="textarea textarea-info w-full input input-bordered"
                placeholder="descreption.."
                required
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="label">
                <span className="label-text text-xl font-bold">average_cost</span>
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
                <span className="label-text text-xl font-bold">seasonality</span>
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
                <span className="label-text text-xl font-bold">travel_time</span>
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
                <span className="label-text text-xl font-bold">totaVisitorsPerYear</span>
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
                <span className="label-text text-xl font-bold">Name</span>
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
                <span className="label-text text-xl font-bold">Email</span>
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

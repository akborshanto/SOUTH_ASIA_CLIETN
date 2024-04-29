import React, { useEffect, useState } from "react";
import UseTitle from "./../../../hook/useTitle/UseTitle";

const CountriesSection = () => {
  const [internationSpot, setInternationalSpot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllInternationalData")
      .then((res) => res.json())
      .then((data) => setInternationalSpot(data));
  }, []);
  const handleReadMore = (id) => {
    // Filter internationSpot to get the single item based on ID
    const singleSpot = internationSpot.find((item) => item._id === id);
    // Now you can do whatever you want with the singleSpot data
    console.log(singleSpot);
  };
  return (
    <div>
      <UseTitle
        heading="COUNRIES SECTION"
        title="Malaysia represents fantastic value for money at almost all levels."
      ></UseTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internationSpot?.map((data) => (
          <div key={Math.random()}>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
              <img
                src={data.img}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {data.countryName}
                  </h2>
                  <p className="text-gray-100">
                    {data.description.slice(0, 100)}
                  </p>
                </div>
                <button
                  onClick={() => handleReadMore(data._id)}
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hook/useContext/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
const Regester = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.Email.value;
    const photo = form.Photo.value;
    const password = form.password.value;

    /* ========Password validation=========== */
    if (password.length < 6) {
      return toast.error(" PASSEORD Length must be at least 6 character");
    }
    if (!/^(?=.*[A-Z]).{8,}$/.test(password)) {
      return toast.error("Must have an Uppercase letter in the password");
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)) {
      return toast("Must have a Lowercase letter in the password");
    }

    /* ===========CREATE A USER================= */
    createUser(email, password)
      .then((res) => {
        toast.success("SUCCESFULLY REGESTER");
      })
      .catch((err) => console.log(err));
    /*UUPPER CASE  */
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <ToastContainer position="top-center" />{" "}
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-[#6ab8b4] text-white mx-auto my-8">
        <ToastContainer position="top-center" />
        <h1 className="text-2xl font-bold text-center">Register Your Account</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-white">
              Username
            </label>
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-400 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="Photo" className="block text-white">
              Photo Url
            </label>
            <input
              type="text"
              required
              name="Photo"
              id="Photo"
              placeholder="Photo"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-400 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block text-white">
              Email
            </label>
            <input
              type="text"
              required
              name="Email"
              id="Email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-400 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
          Password
            <label className="input input-bordered flex items-center gap-2 text-black">
   
              <p onClick={() => setShow(!show)}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </p>

              <input
                required
                id="password"
                type={show ? "text" : "password"}
              
                placeholder="Password"
              />
            </label>
          </div>
          <button className="block w-full p-3 text-center rounded-sm bg-[#AADDE5]  ">
            SIGN IN
          </button>
        </form>
        <Link to="/login">
          {" "}
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline text-blue-600 text-xl"
          >
<p>Go to LoginPage</p>
          </a>{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default Regester;

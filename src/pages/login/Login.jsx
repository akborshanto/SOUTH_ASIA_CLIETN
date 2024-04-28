import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hook/useContext/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [show, setShow] = useState(false);
  const { login ,googleLogin,user, githubLogin} = useContext(AuthContext);

const location=useLocation()
const navigate=useNavigate()
  /* ========LOGIN===== */
  const handleLoging = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
/* logint */
login(email,password)
.then(result=>{
navigate(location.state)

console.log(result)
})
.catch(error=>{
	toast.error("Please Give the Correct Email & Password.")
})

/* github login */

// useEffect(()=>{
// if(user){
// navigate(location.state)
// }


// },[user])

    /* ========Password validation=========== */
    if (password.length < 6) {
      return toast.error(" PASSEORD Length must be at least 6 character");
    }
    // if (!/^(?=.*[A-Z]).{8,}$/.test(password)) {
    //   return toast.error("Must have an Uppercase letter in the password");
    // }
    // if (!/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)) {
    //   return toast("Must have a Lowercase letter in the password");
    // }
   
  }//;https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1714103071~exp=1714106671~hmac=2232a3af0dfc98faf89af349f906681c2d6ac38b7a2ac969a16bda89cf72c04d&w=740
/* =========google login ===*/
const handleGoogle=()=>{
	googleLogin()
	.then(res=>{
		toast("successfully Google Login")
	})
	.then(err=>console.log(err))
}
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <ToastContainer position="top-center" />
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleLoging}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Username
            </label>
            <input
              required
              type="email"
              name="email"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="input input-bordered flex items-center gap-2">
              <p onClick={() => setShow(!show)}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </p>

              <input
                required
                id="password"
                type={show ? "text" : "password"}
                className="grow"
                placeholder="Password"
              />
            </label>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm" onClick={googleLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          <button aria-label="Log in with GitHub" className="p-3 rounded-sm" onClick={()=>githubLogin()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link to="/register">
            {" "}
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline text-gray-100"
            >
              Sign up
            </a>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

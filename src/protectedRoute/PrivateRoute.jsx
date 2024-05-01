import React, { useContext } from 'react'
import { AuthContext } from './../hook/useContext/UseContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  
  const location=useLocation()


  if(loading){
    return //<span className="loading loading-spinner text-success"></span>
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  

}

export default PrivateRoute

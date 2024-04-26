import React, { useContext } from 'react'
import { AuthContext } from './../hook/useContext/UseContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  // if(loading){
  //   return <span className="loading loading-spinner text-success"></span>
  // }
if(user){
  return children
}else{
  return (
    <Navigate to={'/login'}></Navigate>
  )
}
  

}

export default PrivateRoute

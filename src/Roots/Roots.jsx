import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer'

const Roots = () => {
  return (
    <div className='container mx-auto '>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Roots

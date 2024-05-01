import React from 'react'
import { Fade } from "react-awesome-reveal";
const UseTitle = ({heading,title}) => {
  return (
    <div>

<div className='text-center my-16'>
<Fade cascade>
<h1 className='text-4xl my-5 font-bold'>{heading}</h1>
<p className='text-xl my-6'>{title}</p>
</Fade>


</div>
    </div>
  )
}

export default UseTitle

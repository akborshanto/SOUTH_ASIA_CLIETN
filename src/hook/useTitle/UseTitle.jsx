import React from 'react'
import { Fade } from "react-awesome-reveal";
const UseTitle = ({heading,title}) => {
  return (
    <div>

<div className='text-center my-8'>
<Fade cascade>
<h1 className='text-4xl my-5 font-bold'>{heading}</h1>
<p>{title}</p>
</Fade>


</div>
    </div>
  )
}

export default UseTitle

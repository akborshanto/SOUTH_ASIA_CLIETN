import React from 'react'

const UseTitle = ({heading,title}) => {
  return (
    <div>

<div className='text-center my-8'>

<h1 className='text-4xl my-5 font-bold'>{heading}</h1>
<p>{title}</p>
</div>
    </div>
  )
}

export default UseTitle

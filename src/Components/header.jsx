import React from 'react'
import logo from './../assets/Image/logodisney.jpg'

function header() {
  return (
    <div>
        <img src={logo} className='w-[80px] object-cover'/>
    </div>
  )
}

export default header

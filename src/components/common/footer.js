import React from 'react'
import { Link } from 'react-router-dom';


const FooterComponent = () => {
  return (
    <div className='footer text-center footer'>
      <Link to={"/"} className='btn-counter mx-2'>Home</Link>
     <span>Project Movie</span>
      <span className='d-none d-md-inline ms-2'>@ All right reserved</span> 
      <span>-mehdi khallaghi</span>
      <Link to={"rcounter"} className='btn-counter'>to counter-f page(redux)</Link>
      <Link to={"rcounter-class"} className='btn-counter'>to counter-class page(redux)</Link>
      <Link to={"users"} className='btn-counter'>UserList(redux)</Link>
    </div>
  )
}

export default FooterComponent;

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <h3>Admin Panel @Copyright 2024,<Link to="https://risinginfra.in" className='linkingdata'>&nbsp;risinginfra.in</Link></h3>
    </div>
  )
}

export default Footer

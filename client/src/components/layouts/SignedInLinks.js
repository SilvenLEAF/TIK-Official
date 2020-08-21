import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks() {
  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/" >Profile</NavLink></li>
      <li><NavLink to="/" >Log Out</NavLink></li>
      <li><NavLink to="/" >About Us</NavLink></li>
      <li><NavLink to="/" >Bug Report</NavLink></li>
    </>
  )
}

export default SignedInLinks

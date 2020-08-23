import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/signup" >Sign Up</NavLink></li>
      <li><NavLink to="/login" >Log In</NavLink></li>
      <li><NavLink to="/" >About Us</NavLink></li>
      <li><NavLink to="/" >Bug Report</NavLink></li>
    </>
  )
}

export default SignedOutLinks

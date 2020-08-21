import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
  return (
    <>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/" >Sign Up</NavLink>
      <NavLink to="/" >Log In</NavLink>
      <NavLink to="/" >About Us</NavLink>
      <NavLink to="/" >Bug Report</NavLink>
    </>
  )
}

export default SignedOutLinks

import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks({ setUserData }) {
  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/profile" >Profile</NavLink></li>
      <li onClick={ e => setUserData(null) } ><a href="/auth/logout" >Log Out</a></li>
      <li><NavLink to="/" >About Us</NavLink></li>
      <li><NavLink to="/" >Bug Report</NavLink></li>
    </>
  )
}

export default SignedInLinks

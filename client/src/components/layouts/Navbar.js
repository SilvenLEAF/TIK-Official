import '../../styles/Navbar.scss'

import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


import { AuthContext } from '../../contexts/AuthContext';




function Navbar() {

  const { userData, setUserData } = useContext(AuthContext);


  const link = userData && userData.role ? <SignedInLinks setUserData={ setUserData } /> : <SignedOutLinks />;
  return (
    <nav id="myNavbar" className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">TIK ORG</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target="mobileNav">
          <div></div>
          <div></div>
          <div></div>
        </div>


        <ul className="sidenav" id="mobileNav">
          { link }
        </ul>

        <ul className="right hide-on-med-and-down">
          { link }
          <li style={{marginLeft: '20px'}}>
            {
              userData._id && (
              <Link to="/profile" className="btn-floating center pulse white myProfileIcon">
                { userData.userName[0] }
              </Link>
              )
            }
          </li>
        </ul>


        <ul className="right hide-on-large-only">
          <li>
            {
              userData._id && (
                <Link to="/profile" className="btn-floating center pulse white myProfileIcon">
                  { userData.userName[0] }
                </Link>
                )
              }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

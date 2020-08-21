

import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function Navbar() {
  const link = 5 ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper purple">
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

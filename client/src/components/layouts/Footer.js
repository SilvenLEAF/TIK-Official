import '../../styles/Footer.scss'

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <nav id="footer" className="nav-wrapper">
      <div className="container">
        <Link to="/">
          <div>
            <div className="myFooterIcons fa fa-user"></div>
            <div className="myFooterNameTag">
              T.I.K
            </div>
          </div>
        </Link>

        <Link to="/">
          <div>
            <div className="myFooterIcons fa fa-medkit"></div>
            <div className="myFooterNameTag">
              SOLVER
            </div>
          </div>
        </Link>


        <Link to="/">
          <div>
            <div id="myGamepadIcon" className="myFooterIcons fa fa-gamepad"></div>          
          </div>
        </Link>


        <Link to="/">
          <div>
            <div className="myFooterIcons fa fa-user-secret"></div>
            <div className="myFooterNameTag">
              SPIES
            </div>
          </div>
        </Link>


        <Link to="/">
          <div>
            <div className="myFooterIcons fa fa-users"></div>
            <div className="myFooterNameTag">
              TEAM
            </div>
          </div>
        </Link>


      </div>
      
    </nav>
  )
}

export default Footer

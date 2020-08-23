import M from 'materialize-css'
import '../../styles/authForm.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  useEffect(()=>{
    M.AutoInit();
  })


  
  return (
    <>
      <div className="container authFormHolder">        
        <div className="authMainBox">
          <h5>Log In</h5>
          <a href="/" className="oauthBtnGoogle" className="red darken-3">
            <i className="fa fa-google"></i>
            <span>Continue with Google</span>
          </a>


          <a href="/" className="oauthBtnFacebook" className="">
            <i className="fa fa-facebook"></i>
            <span>Continue with Facebook</span>
          </a>


          <a href="/" className="oauthBtnGithub" className="black">
            <i className="fa fa-github"></i>
            <span>Continue with Github</span>
          </a>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, earum blanditiis. Excepturi eaque autem similique, quod, quasi sit doloribus iure dolorum ea mollitia a rerum?
          </p>


        </div>
      </div>      
    </>
  )
}

export default LoginForm

import M from 'materialize-css'
import '../../styles/authForm.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SignupForm() {
  useEffect(()=>{
    M.AutoInit();
  })


  
  return (
    <>
      <div className="container myAuthFormHolder">        
        <div className="myAuthMainBox">
          <h5>Sign Up</h5>
          <a href="/" className="red darken-3 myOauthBtnGoogle">
            <i className="fa fa-google"></i>
            <span>Continue with Google</span>
          </a>


          <a href="/" className="myOauthBtnFacebook">
            <i className="fa fa-facebook"></i>
            <span>Continue with Facebook</span>
          </a>


          <a href="/" className="black myOauthBtnGithub">
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

export default SignupForm

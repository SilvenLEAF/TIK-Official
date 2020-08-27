import M from 'materialize-css'
import '../../styles/authForm.scss'

import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function LoginForm() {
  useEffect(()=>{
    M.AutoInit();
  })

  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()
  
  if(userData._id) history.push('/')
  
  return (
    <>
      <div className="container myAuthFormHolder">        
        <div className="myAuthMainBox">
          <h5>Log In</h5>
          <a href="/auth/google" className="red darken-3 myOauthBtnGoogle">
            <i className="fa fa-google"></i>
            <span>Continue with Google</span>
          </a>


          <a href="/auth/facebook" className="myOauthBtnFacebook">
            <i className="fa fa-facebook"></i>
            <span>Continue with Facebook</span>
          </a>


          <a href="/auth/github" className="black myOauthBtnGithub">
            <i className="fa fa-github"></i>
            <span>Continue with Github</span>
          </a>

          <p>
          Your information is used to allow you to securely sign in. T.I.K keeps certain data for security, support and other special purposes. <span className="blue-text">See how we manage your data.</span>
          </p>


        </div>
      </div>      
    </>
  )
}

export default LoginForm

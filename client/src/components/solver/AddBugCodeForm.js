import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function AddBugCodeForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()
  
  
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');


  
  const postYourBugCode = async (e) =>{
    e.preventDefault();

    let newBugPost = { title, link, description }
    
    const postedBugCodeRes = await fetch('/bugCodes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBugPost)
    });

    const postedBugCodeData = await postedBugCodeRes.json();

    setTitle('')
    setLink('')
    setDescription('')
    

    console.log(postedBugCodeData)
    window.location.href = `/solver`
  }
  
  
  
  if(!userData._id) history.push('/login')
  
  return (
    <div id="addBugCodesPage" className="container">
      <h3>Add your bug</h3>

      <form onSubmit={ postYourBugCode }>
        <div className="input-field">
          <i className="prefix fa fa-bug"></i>
          <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } required />
          <label htmlFor="title">Title</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-link"></i>
          <input type="text" value={ link } onChange={ e => setLink(e.target.value) } required />
          <label htmlFor="link">Link</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <textarea className="materialize-textarea" value={ description } onChange={ e => setDescription(e.target.value) } />
          <label htmlFor="title">Description</label>
        </div>

        <div className="input-field right-align">
        <button type="submit" className="btn blue" style={{marginRight: "20px"}} >Add your <i className="fa fa-bug"></i></button>
          <Link to="/solver" className="btn red darken-4">Cancel</Link>
        </div>


      </form>

    </div>
  )
}

export default AddBugCodeForm

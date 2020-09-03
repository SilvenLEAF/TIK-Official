import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function EntertainmentCodeUpdate(props) {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()
  
  
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  console.log("EntertainmentCodeUpdate -> props", props)
  const entertainmentCodeId = props.match.params.entertainmentCodeId;  
    
  const updateYourEntertainmentCode = async (e) =>{
    e.preventDefault();

    const updatedEntertainmentPost = { entertainmentCodeId }

    if(title) updatedEntertainmentPost.title = title;
    if(link) updatedEntertainmentPost.link = link;
    if(description) updatedEntertainmentPost.description = description;
    
    const updatedEntertainmentCodeRes = await fetch('/entertainmentCodes/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedEntertainmentPost)
    });

    const updatedEntertainmentCodeData = await updatedEntertainmentCodeRes.json();

    setTitle('')
    setLink('')
    setDescription('')
    

    console.log(updatedEntertainmentCodeData)
    window.location.href = `/solver`
  }
  
  
  
  if(!userData._id) history.push('/login')
  
  return (
    <div id="addBugCodesPage" className="container">
      <h3>Update</h3>

      <form onSubmit={ updateYourEntertainmentCode }>
        <div className="input-field">
          <i className="prefix fa fa-star"></i>
          <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } />
          <label htmlFor="title">Title</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-link"></i>
          <input type="text" value={ link } onChange={ e => setLink(e.target.value) } />
          <label htmlFor="link">Link</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <textarea className="materialize-textarea" value={ description } onChange={ e => setDescription(e.target.value) } />
          <label htmlFor="description">Description</label>
        </div>

        <div className="input-field right-align">
        <button type="submit" className="btn blue" style={{marginRight: "20px"}} >Update</button>
          <Link to="/entertainment" className="btn red darken-4">Cancel</Link>
        </div>


      </form>

    </div>
  )
}

export default EntertainmentCodeUpdate

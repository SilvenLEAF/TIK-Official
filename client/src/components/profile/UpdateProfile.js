import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function UpdateProfile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory()
  
  const [userName, setUserName]   = useState('');  
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  const [skills, setSkills] = useState(userData.skills);


  
  const updateYourProfile = async (e) =>{
    e.preventDefault();

    const newProfile = {}

    if(userName) newProfile.userName = userName;
    if(title) newProfile.title = title;
    if(location) newProfile.location = location;
    if(about) newProfile.about = about;
    if(skills) newProfile.skills = skills;
    
    
    const updateYourProfileRes = await fetch('/users/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProfile)
    });

    const updateYourProfileData = await updateYourProfileRes.json();

    setUserName('');
    setTitle('');
    setLocation('');
    setAbout('');
    setSkills('');
    

    console.log(updateYourProfileData)
    window.location.href = `/profile`
  }
  
  
  
  if(!userData._id) history.push('/login')
  
  return (
    <div id="addBugCodesPage" className="container">
      <h3>Update Profile</h3>

      <form onSubmit={ updateYourProfile }>
        <div className="input-field">
          <i className="prefix fa fa-user-circle"></i>
          <input type="text" value={ userName } onChange={ e => setUserName(e.target.value) } />
          <label htmlFor="userName">User Name</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-tag"></i>
          <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } />
          <label htmlFor="title">Title</label>
        </div>
        
        <div className="input-field">
          <i className="prefix fa fa-map-marker"></i>
          <input type="text" value={ location } onChange={ e => setLocation(e.target.value) } />
          <label htmlFor="location">Location</label>
        </div>
        
        <div className="input-field">
          <i className="prefix fa fa-star"></i>
          <input type="text" value={ skills } onChange={ e => setSkills(e.target.value) } />
          <label htmlFor="skills">Skills (seperate them with spaces)</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <textarea className="materialize-textarea" value={ about } onChange={ e => setAbout(e.target.value) } />
          <label htmlFor="about">About You</label>
        </div>

        <div className="input-field right-align">
        <button type="submit" className="btn blue" style={{marginRight: "20px"}} >Update</button>
          <Link to="/profile" className="btn red darken-4">Cancel</Link>
        </div>


      </form>

    </div>
  )
}

export default UpdateProfile

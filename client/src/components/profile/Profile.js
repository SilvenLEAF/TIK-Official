import M from 'materialize-css'
import '../../styles/Profile.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext';




function Profile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const profileImage =  userData && userData.profileImage ? userData.profileImage : "/images/userIcons/userMale.jpg";
  const history = useHistory();

  

  const deleteProfile = async (e) =>{
    e.preventDefault();

    const requestedUserId = userData._id;
    
    const deletedProfileRes = await fetch('/users/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({requestedUserId})
    });

    const deletedProfileData = await deletedProfileRes.json();

    console.log(deletedProfileData)
    window.location.href = `/login`
  }


  if(!userData._id) history.push('/login')

  return (
    <div className="container myProfileContainer">      
      <div className="mainProfileIcon" style={{background: `url(${profileImage}) center/cover`}}></div>

      <h3>{ userData.userName && userData.userName }</h3>
      <h5>{ userData.title && userData.title }</h5>
      <p className="red-text"> { userData.location && userData.location } </p>


      <p>
        { userData.about && userData.about }
      </p>

      <h5 className="purple-text myProfileSectionTitle">Skills</h5>
      <ul className="blue-text text-darken-3 mySkillsHolder">
        { 
          userData.skills && userData.skills.split(' ').map((item, index)=>{
            return (
              <li key={ index }>{ item }</li>
            )
          })
        }
      </ul>


      <div className="right myProfileBtnsHolder">
        <Link to="/updateProfile" className="btn blue" style={{marginRight: "20px"}}>Update</Link>
        <button className="btn red darken-4" onClick={ deleteProfile } >Delete</button>
      </div>
    </div>
  )
}

export default Profile

import M from 'materialize-css'
import '../../styles/Profile.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext';
import { AllUsersContext } from '../../contexts/AllUsersContext';




function UserProfile(props) {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const { allUsers, setAllUsers } = useContext(AllUsersContext);
  const history = useHistory();


  console.log("PROPS", props)
  const index = props.match.params.index;  
  const friendUser = allUsers[parseInt(index)];
  
  if(!userData._id) history.push('/login')

  return (
    <div className="container myProfileContainer">      
      <div className="mainProfileIcon" style={{background: `url(${ (friendUser && friendUser.profileImage) ? friendUser.profileImage : '/images/userIcons/userMale.jpg'}) center/cover`}}></div>
      
      <h6 className="purple-text right">Profile</h6>
      <h3>{ friendUser.userName && friendUser.userName }</h3>
      <h5>{ friendUser.title && friendUser.title }</h5>
      <p className="red-text"> { friendUser.location && friendUser.location } </p>


      <p>
        { friendUser.about && friendUser.about }
      </p>

      <h5 className="purple-text myProfileSectionTitle">Skills</h5>
      <ul className="blue-text text-darken-3 mySkillsHolder">
        { 
          friendUser.skills && friendUser.skills.split(' ').map((item, index)=>{
            return (
              <li key={ index }>{ item }</li>
            )
          })
        }
      </ul>


      <div className="right myProfileBtnsHolder">
        <Link to="/team" className="btn blue">Go Back</Link>
        
      </div>
    </div>
  )
}

export default UserProfile

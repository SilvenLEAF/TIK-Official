import M from 'materialize-css'
import '../../styles/Team.scss'

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext'
import { AllUsersContext } from '../../contexts/AllUsersContext'

function Team() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { userData, setUserData } = useContext(AuthContext)
  const { allUsers, setAllUsers } = useContext(AllUsersContext)
  const history = useHistory()
  
  if(!userData._id) history.push('/login')

  return (
    <div id="myTeamPage" className="container">
      <h6 className="blue-text">Our Crazy TEAM</h6>


      <ul>
        {
          allUsers[0] && allUsers.map((item, index)=>{
            return (
              <Link to={ "/userProfile/" + index } key={ index } >
                <li>
                  <div className="myUserProfileIcon" style={{background: `url(${item.profileImage}) center/cover` }}></div>
                  <div>
                    <div className="myUserName">
                      { item.userName }
                    </div>
      
                    <p className="grey-text">
                      { item.title }
                    </p>
                  </div>
      
                  <div className="fa fa-eye"></div>
      
                </li>
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default Team

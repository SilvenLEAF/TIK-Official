import '../../styles/CodeItem.scss'

import moment from 'moment'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function EntertainmentCodeItem({ entertainmentPost, setEntertainmentPosts, allPosts, index }) {
  
  const { userData, setUserData } = useContext(AuthContext)

  const role = userData.role;


  const deleteEntertainmentCodePost = async (e)=>{
    e.preventDefault();
    
    const newArray = allPosts.splice(index, 1);

    setEntertainmentPosts([
      ...allPosts
    ]);

    const deleteEntertainmentCodePostRes = await fetch('/entertainmentCodes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ entertainmentCodeId: entertainmentPost._id })
    });

    const deleteEntertainmentCodePostData = await deleteEntertainmentCodePostRes.json();
    console.log(deleteEntertainmentCodePostData);
  }


  
  return (
    <div className="myCodeItem">
      <div className="center myCodeTitle">
        <a href={ entertainmentPost.link }>{ entertainmentPost.title }</a>
      </div>
      <div className="myCodeOwner">({ entertainmentPost.ownerName })</div>
     
      <div className="myDate left-align">
        { moment(entertainmentPost.createdAt).calendar() }
      </div>

      <p className="truncate" onClick={ e=> e.target.classList.toggle('truncate') } >
        { entertainmentPost.description }
      </p>

      <div className="right-align">
        
        {
           ( role === 'ceo' || role === 'cto' ) && (
            <>
              <Link to={ "/entertainmentCodeUpdate/" + entertainmentPost._id } className="btn waves-effect waves-light blue darken-1" style={{marginRight: "20px"}} >
                Update
              </Link>

              <button className="btn waves-effect waves-light red darken-4" onClick={ deleteEntertainmentCodePost } >
                Delete
              </button>
            </>
          )
        }
        

        
      </div>
    </div>
  )
}

export default EntertainmentCodeItem
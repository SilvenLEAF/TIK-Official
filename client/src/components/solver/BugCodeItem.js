import '../../styles/CodeItem.scss'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


import { AuthContext } from '../../contexts/AuthContext'

function BugCodeItem({ bugPost, setBugPosts, allPosts, index }) {

  const { userData, setUserData } = useContext(AuthContext)

  const role = userData.role;


  const deleteBugCodePost = async (e)=>{
    e.preventDefault();
    
    const newArray = allPosts.splice(index, 1);

    setBugPosts([
      ...allPosts
    ]);

    const deleteBugCodePostRes = await fetch('/bugCodes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bugCodeId: bugPost._id })
    });

    const deleteBugCodePostData = await deleteBugCodePostRes.json();
    console.log(deleteBugCodePostData);
  }


  
  const ActionBtns = () => {
    if( (role === 'ceo' || role === 'cto') && !bugPost.solved ){            
      return (
        <Link to={ "/bugCodeSolve/" + bugPost._id } className="btn waves-effect waves-light green darken-1" style={{marginRight: "20px"}} >
          Solve
        </Link>
      )
    }
    else if ( (userData._id === bugPost.ownerId) && !bugPost.solved ) {
      return(
        <Link to={ "/bugCodeUpdate/" + bugPost._id } className="btn waves-effect waves-light blue darken-1" style={{marginRight: "20px"}} >
          Update
        </Link>
      )
    } else {
      return null
    }
  }

  return (
    <div className="myCodeItem">
      <div className="center myCodeTitle">
        <a href={ bugPost.link }>{ bugPost.title }</a>
      </div>
      <div className="myCodeOwner">({ bugPost.ownerName })</div>
     
      <div className="myDate left-align">
        { moment(bugPost.createdAt).calendar() }
      </div>

      <p className="truncate" onClick={ e=> e.target.classList.toggle('truncate') } >
        { bugPost.description }
      </p>

      <div className="right-align">
        
        { <ActionBtns/> }

        { 
          ( role === 'ceo' || role === 'cto' || userData._id === bugPost.ownerId ) ? (
            <button className="btn waves-effect waves-light red darken-4" onClick={ deleteBugCodePost } >
              Delete
            </button>
          ) : null
        }

        
        
      </div>
    </div>
  )
}

export default BugCodeItem
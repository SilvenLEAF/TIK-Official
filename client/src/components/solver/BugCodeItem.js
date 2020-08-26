import '../../styles/CodeItem.scss'

import React from 'react'

function BugCodeItem({ bugPost, setBugPosts, allPosts, index }) {
  const role = 'ceo';


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



  return (
    <div className="myCodeItem">
      <div className="center myCodeTitle">
        <a href={ bugPost.link }>{ bugPost.title }</a>
      </div>
      <div className="myCodeOwner">({ bugPost.ownerName })</div>
     
      <div className="myDate left-align">
        { bugPost.createdAt }
      </div>

      <p className="truncate">
        { bugPost.description }
      </p>

      <div className="right-align">
        
        {
          role === 'ceo' ? (
            <button className="btn waves-effect waves-light green darken-1" style={{marginRight: "20px"}}>
              Solved
            </button>
          ) : (
            <button className="btn waves-effect waves-light blue" style={{marginRight: "20px"}}>
              Update
            </button>
          )
        }
        

        <button className="btn waves-effect waves-light red darken-4" onClick={ deleteBugCodePost } >
          Delete
        </button>
        
      </div>
    </div>
  )
}

export default BugCodeItem
import '../../styles/CodeItem.scss'

import React from 'react'

function EntertainmentCodeItem({ entertainmentPost, setEntertainmentPosts, allPosts, index }) {
  const role = 'ceo';


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
        { entertainmentPost.createdAt }
      </div>

      <p className="truncate">
        { entertainmentPost.description }
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
        

        <button className="btn waves-effect waves-light red darken-4" onClick={ deleteEntertainmentCodePost } >
          Delete
        </button>
        
      </div>
    </div>
  )
}

export default EntertainmentCodeItem
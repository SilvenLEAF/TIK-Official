import M from 'materialize-css'

import React, { useEffect, useState } from 'react'


function AddEntertainmentCodeForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');


  
  const postYourEntertainmentCode = async (e) =>{
    e.preventDefault();

    let newEntertainmentPost = { title, link, description, ownerName: 'SilvenLEAF', ownerId: 'shenl0ng' }
    
    const postedEntertainmentCodeRes = await fetch('/entertainmentCodes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntertainmentPost)
    });

    const postedEntertainmentCodeData = await postedEntertainmentCodeRes.json();

    setTitle('')
    setLink('')
    setDescription('')


    console.log(postedEntertainmentCodeData)
  }
  



  return (
    <div id="addEntertainmentCodesPage" className="container">
      <h3>Add Entertainment</h3>

      <form onSubmit={ postYourEntertainmentCode }>
        <div className="input-field">
          <i className="prefix fa fa-heart"></i>
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
          <label htmlFor="title">Description</label>
        </div>

        <div className="input-field right-align">
          <button type="submit" className="btn blue" >Add Entertainment</button>
        </div>


      </form>

    </div>
  )
}

export default AddEntertainmentCodeForm

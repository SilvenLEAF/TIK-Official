import M from 'materialize-css'

import React, { useEffect } from 'react'


function AddBugCodeForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="addBugCodesPage" className="container">
      <h3>Add your bug</h3>

      <form>
        <div className="input-field">
          <i className="prefix fa fa-bug"></i>
          <input type="text"/>
          <label htmlFor="title">Title</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-link"></i>
          <input type="text"/>
          <label htmlFor="link">Link</label>
        </div>

        <div className="input-field">
          <i className="prefix fa fa-edit"></i>
          <textarea className="materialize-textarea" />
          <label htmlFor="title">Description</label>
        </div>

        <div className="input-field right-align">
          <button type="submit" className="btn red darken-4" >Add the Bug</button>
        </div>


      </form>

    </div>
  )
}

export default AddBugCodeForm

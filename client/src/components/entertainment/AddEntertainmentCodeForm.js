import M from 'materialize-css'
import '../../styles/Solver.scss'

import React, { useEffect } from 'react'
import CodeItem from '../GLOBAL/CodeItem';

function AddEntertainmentCodeForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div id="addBugCodesPage" className="container">
      <h3>Add Entertainment</h3>

      <form>
        <div className="input-field">
          <i className="prefix fa fa-heart"></i>
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
          <button type="submit" className="btn blue" >Add Entertainment</button>
        </div>


      </form>

    </div>
  )
}

export default AddEntertainmentCodeForm

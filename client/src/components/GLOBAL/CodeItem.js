import '../../styles/CodeItem.scss'

import React from 'react'

function CodeItem() {
  const role = 'ceo';
  return (
    <div className="myCodeItem">
      <div className="center myCodeTitle">Lorem ipsum</div>
      <div className="myCodeOwner">(SilvenLEAF)</div>
     
      <div className="myDate left-align">
        Last Yesterday 8:30 pm
      </div>

      <p className="truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est quaerat fugit error nostrum voluptatum quibusdam perferendis ratione! Nisi, cum neque, enim veniam delectus at iste pariatur voluptate eum, asperiores modi accusantium est. Atque, dolore facere magni quis veniam modi incidunt nobis. Eligendi odit nam vel fugit quo, consequuntur cum.
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
        

        <button className="btn waves-effect waves-light red darken-4">
          Delete
        </button>
        
      </div>
    </div>
  )
}

export default CodeItem
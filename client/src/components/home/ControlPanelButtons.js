import React from 'react'

function ControlPanelButtons() {
  return (
    <>
     <button className="btn waves-effect waves-light blue">
        CEO Office
      </button>

      <button className="btn waves-effect waves-light purple">
        CTO Engine
      </button>

      <button className="btn waves-effect waves-light" style={{background: "#d00"}} >
        MOD Panel
      </button>

      <button className="btn waves-effect waves-light green darken-4">
        Spies Hideout
      </button> 
    </>
  )
}

export default ControlPanelButtons

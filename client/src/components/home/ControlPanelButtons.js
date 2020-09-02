import React from 'react'

function ControlPanelButtons() {
  return (
    <>
     <div>
       <div className="icon" style={{ background: "url('/images/homeNavigation/ceo.png') center/cover" }} ></div>
       <button className="btn waves-effect waves-light" style={{background: "#d00"}} >
          CEO Office
        </button>
     </div>

      <div>
        <div className="icon" style={{ background: "url('/images/homeNavigation/cto.png') center/cover" }} ></div>
        <button className="btn waves-effect waves-light" style={{background: "#d00"}} >
          CTO Engine
        </button>
      </div>

      <div>
        <div className="icon" style={{ background: "url('/images/homeNavigation/mod.png') center/cover" }} ></div>
        <button className="btn waves-effect waves-light" style={{background: "#d00"}} >
          MOD Panel
        </button>
      </div>

      <div>
        <div className="icon" style={{ background: "url('/images/homeNavigation/spy.png') center/cover" }} ></div>
        <button className="btn waves-effect waves-light" style={{background: "#d00"}}>
          Spies Hideout
        </button> 
      </div>
    </>
  )
}

export default ControlPanelButtons

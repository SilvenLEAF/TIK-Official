import React from 'react'

function BasicButtons() {
  return (
    <>
      <div>
        <div className="icon" style={{ background: "url('/images/homeNavigation/users.png') center/cover" }}></div>
        <button className="btn waves-effect waves-light">
          All Users
        </button>
      </div>

         <div>
          <div className="icon" style={{ background: "url('/images/homeNavigation/progress.png') center/cover" }} ></div>
          <button className="btn waves-effect waves-light" >
            Progress
          </button>
        </div>

        <div>
          <div className="icon" style={{ background: "url('/images/homeNavigation/learn.png') center/cover" }} ></div>
          <button className="btn waves-effect waves-light">
            Learn
          </button>
        </div>

        
        <div>
          <div className="icon" style={{ background: "url('/images/homeNavigation/contest.png') center/cover" }} ></div>
          <button className="btn waves-effect waves-light" >
            Hackathons
          </button>
        </div>

        <div>
          <div className="icon" style={{ background: "url('/images/homeNavigation/fatherhood.png') center/cover" }} ></div>
          <button className="btn waves-effect waves-light">
            Help Desk
          </button>
        </div>

        <div>
          <div className="icon" style={{ background: "url('/images/homeNavigation/ask.png') center/cover" }} ></div>
          <button className="btn waves-effect waves-light">
            Ask
          </button>
        </div>

        <div>
          <div className="icon" style={{ background: "url('/images/homeNavigation/suggest.png') center/cover" }} ></div>
          <button className="btn waves-effect waves-light">
            Suggest
          </button>
        </div>
        
        <div>
          <div className="icon"></div>
          <button className="btn waves-effect waves-light">
            Contact
          </button>
        </div>


    </>
  )
}

export default BasicButtons

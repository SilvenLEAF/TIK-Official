import 'materialize-css/dist/css/materialize.min.css'

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import Solver from './components/solver/Solver'
import Team from './components/team/Team'
import Spies from './components/spies/Spies'
import Entertainment from './components/entertainment/Entertainment'

import SignupForm from './components/auth/SignupForm'
import LoginForm from './components/auth/LoginForm'

function App() {
  const [userData, setUserData] = useState();

  useEffect(()=>{
    const getLoggedinUser = async ()=>{
      const loggedinUserRes = await fetch('/users/');
      const loggedinUserData = await loggedinUserRes.json();

      console.log(loggedinUserData);
      setUserData(loggedinUserData)
    }

    getLoggedinUser();
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
        <Navbar userData={ userData } setUserData={ setUserData } />
          

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/profile">
              <Profile userData={ userData } />
            </Route>

            <Route path="/solver">
              <Solver/>
            </Route>

            <Route path="/team">
              <Team/>
            </Route>

            <Route path="/spies">
              <Spies/>
            </Route>

            <Route path="/entertainment">
              <Entertainment/>
            </Route>


            <Route path="/signup">
              <SignupForm/>
            </Route>

            <Route path="/login">
              <LoginForm/>
            </Route>


          </Switch>
        </div>


        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

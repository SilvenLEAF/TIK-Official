import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import Solver from './components/solver/Solver'
import Team from './components/team/Team'
import Spies from './components/spies/Spies'
import Entertainment from './components/entertainment/Entertainment'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/profile">
            <Profile/>
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

        </Switch>


        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

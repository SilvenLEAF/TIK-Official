import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Home from './components/home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App

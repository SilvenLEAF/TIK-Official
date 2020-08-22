import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Home from './components/home/Home'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />



        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

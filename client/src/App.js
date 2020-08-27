// ---fake data for testing
// import Fake from './DataTESTING'

import 'materialize-css/dist/css/materialize.min.css'

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



import AuthContextProvider from './contexts/AuthContext'
import AllUsersContextProvider from './contexts/AllUsersContext'
import BugContextProvider from './contexts/BugContext'
import EntertainmentContextProvider from './contexts/EntertainmentContext'



import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import UpdateProfile from './components/profile/UpdateProfile'
import Solver from './components/solver/Solver'
import AddBugCodeForm from './components/solver/AddBugCodeForm'
import Team from './components/team/Team'
import UserProfile from './components/team/UserProfile'
import Spies from './components/spies/Spies'
import Entertainment from './components/entertainment/Entertainment'
import AddEntertainmentCodeForm from './components/entertainment/AddEntertainmentCodeForm'

import SignupForm from './components/auth/SignupForm'
import LoginForm from './components/auth/LoginForm'

function App() {
  
  // const [userData, setUserData] = useState(Fake.profileData);
  // const [allUsers, setAllUsers] = useState(Fake.allUsers);
  // const [bugPosts, setBugPosts] = useState(Fake.entertainmentData)
  // const [entertainmentPosts, setEntertainmentPosts] = useState(Fake.entertainmentData)
  
  
  
  const [userData, setUserData] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [bugPosts, setBugPosts] = useState([])
  const [entertainmentPosts, setEntertainmentPosts] = useState([])



  /* ----------------------------------------
  .            GET LOGGED IN USER
  ---------------------------------------- */
  useEffect(()=>{
    const getLoggedinUser = async ()=>{
      const loggedinUserRes = await fetch('/users/');
      const loggedinUserData = await loggedinUserRes.json();

      console.log(loggedinUserData);
      setUserData(loggedinUserData)
    }

    getLoggedinUser();
  }, [])




  /* ----------------------------------------
  .            GET ALL USERS
  ---------------------------------------- */
  useEffect(()=>{
    const getAllUsers = async ()=>{
      const allUsersRes = await fetch('/users/all');
      const allUsersData = await allUsersRes.json();

      console.log(allUsersData);
      setAllUsers(allUsersData)
    }

    getAllUsers();
  }, [])





  /* ----------------------------------------
  .            GET ALL BUG POSTS
  ---------------------------------------- */
  useEffect(()=>{
    const getAllBugPosts = async ()=>{
      const allBugPostRes = await fetch('/bugCodes/all');
      const allBugPostData = await allBugPostRes.json();

      console.log(allBugPostData);
      setBugPosts(allBugPostData)
    }

    getAllBugPosts();
  }, [])






  
  /* ----------------------------------------
  .       GET ALL ENTERTAINMENT POSTS
  ---------------------------------------- */
  useEffect(()=>{
    const getAllEntertainmentPosts = async ()=>{
      const allEntertainmentPostRes = await fetch('/entertainmentCodes/all');
      const allEntertainmentPostData = await allEntertainmentPostRes.json();

      console.log(allEntertainmentPostData);
      setEntertainmentPosts(allEntertainmentPostData)
    }

    getAllEntertainmentPosts();
  }, [])




  

  return (
    <BrowserRouter>
      <AuthContextProvider userData={ userData } setUserData={ setUserData }>
        <AllUsersContextProvider allUsers={ allUsers } setAllUsers={ setAllUsers } >
        <BugContextProvider bugPosts={ bugPosts } setBugPosts={ setBugPosts }>
            <EntertainmentContextProvider entertainmentPosts={ entertainmentPosts } setEntertainmentPosts={ setEntertainmentPosts }>




              <div className="App">
                <Navbar />
                <div id="myWrapper">
                  

                  <Switch>

                    <Route path="/login">
                      <LoginForm/>
                    </Route>

                  <Route path="/signup">
                      <SignupForm/>
                    </Route>

                    <Route exact path="/">
                      <Home/>
                    </Route>

                    <Route path="/profile">
                      <Profile />
                    </Route>
                    
                    <Route path="/updateProfile">
                      <UpdateProfile />
                    </Route>

                    <Route path="/solver">
                      <Solver/>
                    </Route>

                    <Route path="/addBug">
                      <AddBugCodeForm/>
                    </Route>

                    <Route path="/team">
                      <Team/>
                    </Route>

                    <Route path="/userProfile/:index" component={UserProfile} />

                    <Route path="/spies">
                      <Spies/>
                    </Route>

                    <Route path="/entertainment">
                      <Entertainment/>
                    </Route>

                    <Route path="/addEntertainment">
                      <AddEntertainmentCodeForm/>
                    </Route>                 


                  </Switch>
                </div>


                <Footer />
              </div>
            


            </EntertainmentContextProvider>
          </BugContextProvider>
        </AllUsersContextProvider>
      </AuthContextProvider>



    </BrowserRouter>
  )
}

export default App

import React, { createContext } from 'react'


export const EntertainmentContext = createContext();


function EntertainmentContextProvider({ children, entertainmentPosts, setEntertainmentPosts }) {
  return (
    <EntertainmentContext.Provider value={{ entertainmentPosts, setEntertainmentPosts }}>
      { children }
    </EntertainmentContext.Provider>
  )
}

export default EntertainmentContextProvider

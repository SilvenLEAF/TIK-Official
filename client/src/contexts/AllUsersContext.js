import React, { createContext } from 'react'


export const AllUsersContext = createContext();


function AllUsersContextProvider({ children, allUsers, setAllUsers }) {
  return (
    <AllUsersContext.Provider value={{ allUsers, setAllUsers }}>
      { children }
    </AllUsersContext.Provider>
  )
}

export default AllUsersContextProvider

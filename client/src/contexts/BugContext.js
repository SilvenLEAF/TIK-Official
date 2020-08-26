import React, { createContext } from 'react'


export const BugContext = createContext();


function BugContextProvider({ children, bugPosts, setBugPosts }) {
  return (
    <BugContext.Provider value={{ bugPosts, setBugPosts }}>
      { children }
    </BugContext.Provider>
  )
}

export default BugContextProvider

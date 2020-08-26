import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

function AuthContextProvider({ children, userData, setUserData }) {
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

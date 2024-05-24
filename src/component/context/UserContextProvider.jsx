import React, { useState } from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
  return (
    
    <UserContext.Provider value={{user,setUser}}>
        {children}      
    </UserContext.Provider>
  )
}

export default UserContextProvider

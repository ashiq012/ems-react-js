import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage , setLocalStorage} from '../utils/LocalStorage';
export const AuthContext = createContext();


function AuthProvider({children}) {
    setLocalStorage()
    const [userData , setUserData] = useState(null);
    useEffect(()=>{
        const {employee} = getLocalStorage();
        setUserData(employee)
    },[])
    return (
    <AuthContext.Provider
    value={[userData,setUserData]}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
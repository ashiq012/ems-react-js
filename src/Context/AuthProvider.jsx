import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage , setLocalStorage} from '../utils/LocalStorage';
export const AuthContext = createContext();


function AuthProvider({children}) {
    const [userData , setUserData] = useState(null);
    useEffect(()=>{
        const {employee , admin} = getLocalStorage();
        setUserData({employee,admin})
    },[])
    return (
    <AuthContext.Provider
    value={userData}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
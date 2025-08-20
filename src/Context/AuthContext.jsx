import React from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
function AuthContext({children}) {
  return (
    <div>{children}</div>
  )
}

export default AuthContext
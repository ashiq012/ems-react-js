import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
function App() {
  const [user , setuser] = useState(null);
  const handleLogin = (email,password) => {
    if(email == "admin@gmail.com" && password == "123"){
      setuser('admin')
    }
    else if(email == "user@gmail.com" && password == "123"){
      setuser('employee')
    }
    else{
      alert("invalid");
    }
  }
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
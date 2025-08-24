import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';
import { setLocalStorage } from './utils/LocalStorage';
function App() {
  const [userData,setUserData] = useContext(AuthContext)
  const [loggedInUserData , setloggedInUserData] = useState(null);
  const [user , setuser] = useState(null);
  useEffect(()=>{
    let activeLogin = localStorage.getItem('loggedInUser')
    if(activeLogin){
      const userData = JSON.parse(activeLogin);
      setuser(userData.role);
      setloggedInUserData(userData.data)
    }
  },[])
  
  const handleLogin = (email,password) => {
    if(email == 'admin@example.com' && password == "123"){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))  
    }
    else if(userData){
      const emp = userData.find((e,key) => email == e.email && password == e.password) ;
      if(emp){
      setuser('employee')
      setloggedInUserData(emp)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data : emp}))
      }
    }
    else{
      alert("invalid");
    }
  }
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard changeUser ={setuser}/> : (user == 'employee' ?<EmployeeDashboard loggedInUserData={loggedInUserData} changeUser={setuser}/> : '' )}
    </>
  )
}

export default App
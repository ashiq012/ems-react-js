import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';
function App() {
  const data = useContext(AuthContext);
  const [loggedInUserData , setloggedInUserData] = useState();
  const [user , setuser] = useState(null);
  
  // useEffect(()=>{
  //  if(data){
  //   const role = localStorage.getItem('loggedInUser');
  //   if(role){
  //     const loggedInUser = JSON.parse(role)
  //     console.log(loggedInUser.role)
  //     setuser(loggedInUser.role);
  //   }}
  // })
  const handleLogin = (email,password) => {
    if(email == 'admin@example.com' && password == "123"){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))  
    }
    else if(data){
      const emp = data.employee.find((e) => email == e.email && password == e.password) ;
      if(emp){
      setuser('employee')
      setloggedInUserData(emp)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))
      }
    }
    else{
      alert("invalid");
    }
  }
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ?<EmployeeDashboard loggedInUserData={loggedInUserData}/> : '' )}
    </>
  )
}

export default App
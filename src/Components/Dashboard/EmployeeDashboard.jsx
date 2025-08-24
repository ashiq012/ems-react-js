import React from 'react'
import Header from '../others/Header'
import TaskListNumbere from '../others/TaskListNumbere'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard(props) {
  return (
    <div className='h-screen bg-[#1c1c1c] p-15'><Header loggedInUserData = {props.loggedInUserData}
    changeUser={props.changeUser}
    />
    <TaskListNumbere loggedInUserData = {props.loggedInUserData}/>
    <TaskList loggedInUserData= {props.loggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard
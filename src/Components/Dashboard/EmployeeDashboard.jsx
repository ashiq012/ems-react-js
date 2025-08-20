import React from 'react'
import Header from '../others/Header'
import TaskListNumbere from '../others/TaskListNumbere'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard() {
  return (
    <div className='h-screen bg-[#1c1c1c] p-15'><Header/>
    <TaskListNumbere/>
    <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
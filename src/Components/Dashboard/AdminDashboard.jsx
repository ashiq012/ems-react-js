import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard() {
  return (
    <div className='h-full w-screen p-3 '>
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
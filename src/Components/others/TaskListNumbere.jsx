import React from 'react'

function TaskListNumbere({loggedInUserData}) {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='bg-blue-400 py-5 px-10 rounded-xl w-[45%] '>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
         <div className='bg-green-400 py-5 px-10 rounded-xl w-[45%] '>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium '>Completed Task</h3>
        </div>
         <div className='bg-yellow-400 py-5 px-10 rounded-xl w-[45%] '>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskCounts.active}</h2>
            <h3 className='text-xl font-medium '>Active Task</h3>
        </div>
         <div className='bg-red-400 py-5 px-10 rounded-xl w-[45%] '>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbere